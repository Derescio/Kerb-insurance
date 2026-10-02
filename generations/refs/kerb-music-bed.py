"""Original 15s music bed for the Kerb spot. 120 BPM so every cut (3.5/7.5/11/13s) is on a beat.
Arrangement: warm pad from 0s, swell into the wiper cut, plucked arpeggio lifts at 3.5s,
soft heartbeat kick + shaker 7.5–13s, suspended chord 11–13s resolving on the end card."""
import numpy as np, wave

SR = 48000
DUR = 15.0
N = int(SR * DUR)
t = np.arange(N) / SR
rng = np.random.default_rng(7)
BEAT = 0.5

def hz(m): return 440.0 * 2 ** ((m - 69) / 12)

def fft_lowpass(x, cutoff, slope=4):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    return np.fft.irfft(X / np.sqrt(1 + (f / cutoff) ** (2 * slope)), len(x))

def env(start, end, a=0.8, r=1.2):
    e = np.zeros(N); i0, i1 = int(start * SR), min(int(end * SR), N)
    seg = np.ones(i1 - i0); na, nr = min(int(a * SR), len(seg)), min(int(r * SR), len(seg))
    seg[:na] = np.linspace(0, 1, na) ** 2; seg[-nr:] *= np.linspace(1, 0, nr) ** 1.5
    e[i0:i1] = seg; return e

# Chords (MIDI): Dmaj9, Bm9, Gmaj7(9), Asus4->A, Dmaj9
SECTIONS = [
    (0.0, 3.5 + 0.3, [50, 57, 61, 64, 66]),
    (3.5, 7.5 + 0.3, [47, 54, 57, 62, 61]),
    (7.5, 11.0 + 0.3, [43, 50, 54, 57, 62]),
    (11.0, 12.0 + 0.2, [45, 52, 57, 62, 64]),
    (12.0, 13.0 + 0.3, [45, 52, 57, 61, 64]),
    (13.0, 15.0, [50, 57, 61, 64, 69]),
]

def pad_voice(f):
    ph = rng.uniform(0, 2 * np.pi, 3)
    v = sum(np.sin(2 * np.pi * f * d * t + p) for d, p in zip((1.0, 1.003, 0.997), ph))
    v += 0.25 * np.sin(2 * np.pi * 2 * f * t)
    return v / 3

L = np.zeros(N); R = np.zeros(N)
for (s, e, notes) in SECTIONS:
    rel = 2.0 if s >= 13 else 0.5
    en = env(s, e if s < 13 else DUR, a=0.6 if s > 0 else 1.5, r=rel)
    for k, m in enumerate(notes):
        v = pad_voice(hz(m)) * en * (0.9 if k == 0 else 0.55)
        pan = 0.5 + 0.35 * ((k % 2) * 2 - 1) * (k / len(notes))
        L += v * (1 - pan); R += v * pan
L = fft_lowpass(L, 1400); R = fft_lowpass(R, 1400)

# Swell into the wiper cut (2.0 -> 3.5s): filtered noise riser, cut dead on the beat
riser = rng.standard_normal(N) * np.clip((t - 2.0) / 1.5, 0, 1) ** 3 * (t < 3.5)
riser = fft_lowpass(riser, 2500) * 0.35
L += riser; R += riser

# Plucked arpeggio from 3.5s on 8th notes, follows the chord tones an octave up
def pluck(f, at, dur=0.45, amp=0.5):
    i0 = int(at * SR); n = min(int(dur * SR), N - i0)
    if n <= 0: return np.zeros(0), i0
    tt = np.arange(n) / SR
    x = (np.sin(2 * np.pi * f * tt) + 0.3 * np.sin(2 * np.pi * 2 * f * tt) + 0.1 * np.sin(2 * np.pi * 3 * f * tt))
    return x * np.exp(-tt * 7) * amp * np.minimum(1, tt * 400), i0

arpL = np.zeros(N); arpR = np.zeros(N)
step = 0
for (s, e, notes) in SECTIONS:
    if s < 3.5: continue
    tones = [n + 12 for n in notes[1:]]
    at = s
    end = min(e - 0.3 if s < 13 else 14.0, DUR)
    while at < end - 1e-6:
        order = [0, 2, 1, 3, 2, 1]
        m = tones[order[step % len(order)] % len(tones)]
        x, i0 = pluck(hz(m), at, amp=0.42 if (step % 2 == 0) else 0.28)
        pan = 0.3 if step % 2 == 0 else 0.7
        arpL[i0:i0 + len(x)] += x * (1 - pan); arpR[i0:i0 + len(x)] += x * pan
        at += BEAT / 2; step += 1
fade_arp = np.clip((t - 3.5) / 0.05, 0, 1) * np.where(t > 13.0, np.clip(1 - (t - 13.0) / 1.0, 0, 1), 1)
L += fft_lowpass(arpL, 3200) * fade_arp; R += fft_lowpass(arpR, 3200) * fade_arp

# Heartbeat kick on beats 1 & 3, and soft shaker on off-beats, 7.5–13s
def kick(at):
    i0 = int(at * SR); n = int(0.35 * SR); tt = np.arange(n) / SR
    f = 48 + 70 * np.exp(-tt * 30)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 9) * 0.9, i0
at = 7.5
while at < 13.0 - 1e-6:
    x, i0 = kick(at); L[i0:i0 + len(x)] += x; R[i0:i0 + len(x)] += x
    at += BEAT * 2
sh = np.zeros(N); at = 7.75
while at < 13.0:
    i0 = int(at * SR); n = int(0.08 * SR); tt = np.arange(n) / SR
    sh[i0:i0 + n] += rng.standard_normal(n) * np.exp(-tt * 60) * 0.12
    at += BEAT
X = np.fft.rfft(sh); f = np.fft.rfftfreq(N, 1 / SR); sh = np.fft.irfft(X * (f > 5000), N)
L += sh * 0.9; R += sh * 1.1

# End-card hit at 13.0: low D sub + bell, rings out
tt = np.clip(t - 13.0, 0, None); on = (t >= 13.0)
hit = on * (np.sin(2 * np.pi * hz(38) * tt) * np.exp(-tt * 1.6) * 0.8
            + np.sin(2 * np.pi * hz(86) * tt) * np.exp(-tt * 2.5) * 0.18
            + np.sin(2 * np.pi * hz(81) * tt) * np.exp(-tt * 2.2) * 0.12)
L += hit; R += hit

# Reverb: FFT convolution with a decaying stereo noise IR
def reverb(x, seed, decay=1.8, wet=0.28):
    n = int(decay * SR); tt = np.arange(n) / SR
    ir = np.random.default_rng(seed).standard_normal(n) * np.exp(-tt * 6.9 / decay)
    ir = fft_lowpass(ir, 5000); ir /= np.sqrt(np.sum(ir ** 2))
    m = len(x) + n
    y = np.fft.irfft(np.fft.rfft(x, m) * np.fft.rfft(ir, m), m)[:len(x)]
    return x * (1 - wet) + y * wet * 3
L, R = reverb(L, 1), reverb(R, 2)

# Master: gentle fade-out, soft clip, normalise
master = np.clip(1 - (t - 14.2) / 0.8, 0, 1)
L *= master; R *= master
st = np.stack([L, R], 1)
st = np.tanh(st / np.max(np.abs(st)) * 1.4) / np.tanh(1.4) * 0.89
with wave.open("music.wav", "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((st * 32767).astype("<i2").tobytes())
print("music.wav", st.shape[0] / SR, "s")
