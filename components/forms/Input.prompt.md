Text field for quote and claim forms. Always give it a visible `label`.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="Estimated annual mileage" suffix="miles" inputMode="numeric" />
<Input label="Voluntary excess" prefix="£" hint="What you pay towards a claim." />
<Input variant="plate" label="Registration" placeholder="AB12 CDE" />
<Input label="Date of birth" error="Enter a date in the past" />
```

- Errors say what to do: "Enter your postcode", not "Invalid input".
