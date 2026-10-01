/* @ds-bundle: {"format":4,"namespace":"KerbDesignSystem_549f9e","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Icon","sourcePath":"components/display/Icon.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/display/Wordmark.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"CoverageOption","sourcePath":"components/insurance/CoverageOption.jsx"},{"name":"Timeline","sourcePath":"components/insurance/Timeline.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"782ddd465ab4","components/actions/IconButton.jsx":"a94e517fc62a","components/display/Badge.jsx":"38ee71e86262","components/display/Card.jsx":"2008b968ae53","components/display/Icon.jsx":"759f1fc2ca34","components/display/Tag.jsx":"4c0ba5094941","components/display/Wordmark.jsx":"0d8740720c90","components/feedback/Alert.jsx":"760ebc315d92","components/feedback/Dialog.jsx":"ab41f6e67d81","components/feedback/Toast.jsx":"46065d181132","components/feedback/Tooltip.jsx":"7001f4d319fa","components/forms/Checkbox.jsx":"30841079ff9e","components/forms/Input.jsx":"7df4d7aa99f5","components/forms/Radio.jsx":"91eca967579d","components/forms/Select.jsx":"16a1821109b5","components/forms/Switch.jsx":"dd1fbedfe220","components/insurance/CoverageOption.jsx":"bb09eb9e2526","components/insurance/Timeline.jsx":"dca8e5f46767","components/navigation/Stepper.jsx":"37e07fa26874","components/navigation/Tabs.jsx":"9141c5d4b1e9","ui_kits/mobile-app/AccountScreen.jsx":"91497001580a","ui_kits/mobile-app/ClaimFlow.jsx":"b4b43be22a3c","ui_kits/mobile-app/ClaimsScreens.jsx":"99810236af18","ui_kits/mobile-app/HomeScreen.jsx":"abc0b9383809","ui_kits/mobile-app/PolicyScreen.jsx":"3f526c34246c","ui_kits/mobile-app/Shell.jsx":"d622b5464315","ui_kits/mobile-app/ios-frame.jsx":"24642b887be3","ui_kits/web/Chrome.jsx":"b5b31d946b4b","ui_kits/web/Dashboard.jsx":"d80e39f0111f","ui_kits/web/QuoteSteps.jsx":"e46e7a619420"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KerbDesignSystem_549f9e = window.KerbDesignSystem_549f9e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Badge({
  tone = 'neutral',
  dot = false,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cx('kb-badge', tone !== 'neutral' && 'kb-badge--' + tone, className)
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "kb-badge__dot",
    "aria-hidden": "true"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Card({
  variant = 'raised',
  padding = 'md',
  interactive = false,
  as = 'div',
  className,
  children,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cx('kb-card', 'kb-card--' + variant, padding !== 'md' && 'kb-card--pad-' + padding, interactive && 'kb-card--interactive', className)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON_BASE = 'https://unpkg.com/lucide-static@0.469.0/icons/';
function Icon({
  name,
  size = 20,
  color,
  label,
  className,
  style,
  ...rest
}) {
  const url = 'url(' + ICON_BASE + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'kb-icon' + (className ? ' ' + className : ''),
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      width: size,
      height: size,
      backgroundColor: color || 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  loading = false,
  disabled,
  type = 'button',
  className,
  children,
  ...rest
}) {
  const is = size === 'sm' ? 16 : 18;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cx('kb-btn', 'kb-btn--' + variant, 'kb-btn--' + size, fullWidth && 'kb-btn--full', className),
    disabled: disabled || loading,
    "aria-busy": loading || undefined
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    className: "kb-spinner",
    "aria-hidden": "true"
  }) : iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: is
  }) : null, children != null ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight && !loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: is
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  type = 'button',
  className,
  ...rest
}) {
  const is = size === 'sm' ? 16 : size === 'lg' ? 22 : 20;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    "aria-label": label,
    title: label,
    className: cx('kb-iconbtn', 'kb-iconbtn--' + variant, size !== 'md' && 'kb-iconbtn--' + size, className)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: is
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Tag({
  selected = false,
  icon,
  onRemove,
  onClick,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    "aria-pressed": onClick ? selected : undefined,
    onClick: onClick,
    onKeyDown: onClick ? e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick(e);
      }
    } : undefined,
    className: cx('kb-tag', selected && 'kb-tag--selected', className)
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, /*#__PURE__*/React.createElement("span", null, children), onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "kb-tag__remove",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Wordmark({
  size = 28,
  tone = 'ink',
  descriptor,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cx('kb-wordmark', tone === 'inverse' && 'kb-wordmark--inverse', className),
    style: {
      fontSize: size,
      ...style
    },
    "aria-label": "Kerb"
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "kerb"), /*#__PURE__*/React.createElement("span", {
    className: "kb-wordmark__dot",
    "aria-hidden": "true"
  }), descriptor ? /*#__PURE__*/React.createElement("span", {
    className: "kb-wordmark__desc",
    "aria-hidden": "true"
  }, descriptor) : null);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
const ICONS = {
  neutral: 'info',
  info: 'info',
  success: 'circle-check',
  warning: 'triangle-alert',
  danger: 'circle-alert'
};
function Alert({
  tone = 'info',
  title,
  icon,
  action,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: tone === 'danger' ? 'alert' : 'status',
    className: cx('kb-alert', tone !== 'neutral' && 'kb-alert--' + tone, className)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || ICONS[tone],
    size: 20,
    className: "kb-alert__icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kb-alert__body"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: "kb-alert__title"
  }, title) : null, children, action ? /*#__PURE__*/React.createElement("div", {
    className: "kb-alert__action"
  }, action) : null));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Dialog({
  open = true,
  onClose,
  title,
  description,
  actions,
  size = 'md',
  presentation = 'modal',
  contained = false,
  className,
  children,
  ...rest
}) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const h = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [open, onClose]);
  if (!open) return null;
  const sheet = presentation === 'sheet';
  return /*#__PURE__*/React.createElement("div", {
    className: cx('kb-dialog-scrim', contained && 'kb-dialog-scrim--contained', sheet && 'kb-dialog-scrim--sheet'),
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    className: cx('kb-dialog', size !== 'md' && 'kb-dialog--' + size, className)
  }, rest), sheet ? /*#__PURE__*/React.createElement("div", {
    className: "kb-dialog__grab",
    "aria-hidden": "true"
  }) : null, onClose && !sheet ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    className: "kb-dialog__close",
    onClick: onClose
  }) : null, title ? /*#__PURE__*/React.createElement("h2", {
    className: "kb-dialog__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "kb-dialog__desc"
  }, description) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "kb-dialog__body"
  }, children) : null, actions ? /*#__PURE__*/React.createElement("div", {
    className: "kb-dialog__actions"
  }, actions) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
const ICONS = {
  neutral: 'info',
  info: 'info',
  success: 'circle-check',
  warning: 'triangle-alert',
  danger: 'circle-alert'
};
function Toast({
  tone = 'success',
  title,
  message,
  actionLabel,
  onAction,
  onClose,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    "aria-live": "polite",
    className: cx('kb-toast', 'kb-toast--' + tone, className)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[tone],
    size: 20,
    className: "kb-toast__icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kb-toast__body"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: "kb-toast__title"
  }, title) : null, message ? /*#__PURE__*/React.createElement("span", {
    className: "kb-toast__msg"
  }, message) : null), actionLabel ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "kb-toast__action",
    onClick: onAction
  }, actionLabel) : null, onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    variant: "inverse",
    onClick: onClose
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Tooltip({
  content,
  placement = 'top',
  open = false,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cx('kb-tip', placement === 'bottom' && 'kb-tip--bottom', open && 'kb-tip--open', className)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: "kb-tip__bubble"
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Checkbox({
  label,
  description,
  disabled,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: cx('kb-check', disabled && 'kb-check--disabled', className),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "kb-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), label || description ? /*#__PURE__*/React.createElement("span", {
    className: "kb-check__text"
  }, label ? /*#__PURE__*/React.createElement("span", null, label) : null, description ? /*#__PURE__*/React.createElement("span", {
    className: "kb-check__desc"
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Field({
  id,
  label,
  optional,
  hint,
  error,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kb-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "kb-field__label",
    htmlFor: id
  }, label, optional ? /*#__PURE__*/React.createElement("span", {
    className: "kb-field__optional"
  }, " (optional)") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "kb-field__error",
    id: id + '-err'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert",
    size: 14
  }), error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "kb-field__hint",
    id: id + '-hint'
  }, hint) : null);
}
let uid = 0;
function Input({
  label,
  hint,
  error,
  optional,
  iconLeft,
  prefix,
  suffix,
  variant = 'default',
  disabled,
  id,
  className,
  style,
  ...rest
}) {
  const [autoId] = React.useState(() => 'kb-in-' + ++uid);
  const fid = id || autoId;
  return /*#__PURE__*/React.createElement(Field, {
    id: fid,
    label: label,
    optional: optional,
    hint: hint,
    error: error
  }, /*#__PURE__*/React.createElement("div", {
    className: cx('kb-control', variant === 'plate' && 'kb-control--plate', error && 'kb-control--error', disabled && 'kb-control--disabled', className),
    style: style
  }, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18
  }) : null, prefix ? /*#__PURE__*/React.createElement("span", {
    className: "kb-control__affix"
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    disabled: disabled,
    "aria-invalid": !!error || undefined,
    "aria-describedby": error ? fid + '-err' : hint ? fid + '-hint' : undefined
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    className: "kb-control__affix"
  }, suffix) : null));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Radio({
  label,
  description,
  disabled,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: cx('kb-check', 'kb-check--radio', disabled && 'kb-check--disabled', className),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "kb-check__box"
  }), label || description ? /*#__PURE__*/React.createElement("span", {
    className: "kb-check__text"
  }, label ? /*#__PURE__*/React.createElement("span", null, label) : null, description ? /*#__PURE__*/React.createElement("span", {
    className: "kb-check__desc"
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Field({
  id,
  label,
  optional,
  hint,
  error,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kb-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "kb-field__label",
    htmlFor: id
  }, label, optional ? /*#__PURE__*/React.createElement("span", {
    className: "kb-field__optional"
  }, " (optional)") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "kb-field__error",
    id: id + '-err'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert",
    size: 14
  }), error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "kb-field__hint",
    id: id + '-hint'
  }, hint) : null);
}
let uid = 0;
function Select({
  label,
  hint,
  error,
  optional,
  options = [],
  placeholder,
  disabled,
  id,
  value,
  defaultValue,
  className,
  style,
  ...rest
}) {
  const [autoId] = React.useState(() => 'kb-sel-' + ++uid);
  const fid = id || autoId;
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const dv = value === undefined && defaultValue === undefined && placeholder ? '' : defaultValue;
  return /*#__PURE__*/React.createElement(Field, {
    id: fid,
    label: label,
    optional: optional,
    hint: hint,
    error: error
  }, /*#__PURE__*/React.createElement("div", {
    className: cx('kb-control', error && 'kb-control--error', disabled && 'kb-control--disabled', className),
    style: style
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    disabled: disabled,
    value: value,
    defaultValue: dv,
    required: !!placeholder,
    "aria-invalid": !!error || undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    className: "kb-control__chev"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Switch({
  label,
  labelPosition = 'start',
  disabled,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: cx('kb-switch', labelPosition === 'end' && 'kb-switch--end', disabled && 'kb-switch--disabled', className),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "kb-switch__track",
    "aria-hidden": "true"
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/insurance/CoverageOption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function CoverageOption({
  name,
  description,
  price,
  period = '/month',
  features = [],
  selected = false,
  flag,
  onSelect,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "radio",
    "aria-checked": selected,
    onClick: onSelect,
    className: cx('kb-cover', selected && 'kb-cover--selected', className)
  }, rest), flag ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent",
    className: "kb-cover__flag"
  }, flag) : null, /*#__PURE__*/React.createElement("span", {
    className: "kb-cover__head"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "kb-cover__name"
  }, name), description ? /*#__PURE__*/React.createElement("span", {
    className: "kb-cover__desc"
  }, description) : null), /*#__PURE__*/React.createElement("span", {
    className: "kb-cover__radio",
    "aria-hidden": "true"
  })), price != null ? /*#__PURE__*/React.createElement("span", {
    className: "kb-cover__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kb-cover__amount"
  }, price), /*#__PURE__*/React.createElement("span", {
    className: "kb-cover__period"
  }, period)) : null, features.length ? /*#__PURE__*/React.createElement("ul", {
    className: "kb-cover__list"
  }, features.map((f, i) => {
    const it = typeof f === 'string' ? {
      label: f,
      included: true
    } : f;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: it.included === false ? 'is-off' : undefined
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.included === false ? 'minus' : 'check',
      size: 18,
      color: it.included === false ? 'var(--fg-4)' : 'var(--green-600)'
    }), /*#__PURE__*/React.createElement("span", null, it.label));
  })) : null);
}
Object.assign(__ds_scope, { CoverageOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/insurance/CoverageOption.jsx", error: String((e && e.message) || e) }); }

// components/insurance/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Timeline({
  items = [],
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    className: cx('kb-timeline', className)
  }, rest), items.map((it, i) => {
    const st = it.status || 'upcoming';
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: 'kb-tl kb-tl--' + st,
      "aria-current": st === 'current' ? 'step' : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "kb-tl__node"
    }, st === 'done' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 14
    }) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "kb-tl__title"
    }, it.title), it.meta ? /*#__PURE__*/React.createElement("div", {
      className: "kb-tl__meta"
    }, it.meta) : null, it.description ? /*#__PURE__*/React.createElement("div", {
      className: "kb-tl__desc"
    }, it.description) : null));
  }));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/insurance/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Stepper({
  steps = [],
  current = 0,
  variant = 'default',
  className,
  ...rest
}) {
  const state = i => i < current ? 'done' : i === current ? 'current' : 'upcoming';
  if (variant === 'bar') {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: cx('kb-stepper', 'kb-stepper--bar', className),
      role: "progressbar",
      "aria-valuemin": 1,
      "aria-valuemax": steps.length,
      "aria-valuenow": current + 1,
      "aria-valuetext": steps[current]
    }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: 'kb-bar kb-bar--' + state(i)
    })));
  }
  const out = [];
  steps.forEach((s, i) => {
    const st = state(i);
    if (i > 0) out.push(/*#__PURE__*/React.createElement("li", {
      key: 'l' + i,
      "aria-hidden": "true",
      className: cx('kb-stepper__line', i <= current && 'kb-stepper__line--done')
    }));
    out.push(/*#__PURE__*/React.createElement("li", {
      key: i,
      className: 'kb-step kb-step--' + st,
      "aria-current": st === 'current' ? 'step' : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "kb-step__dot"
    }, st === 'done' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 14
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      className: "kb-step__label"
    }, s)));
  });
  return /*#__PURE__*/React.createElement("ol", _extends({
    className: cx('kb-stepper', variant === 'compact' && 'kb-stepper--compact', className)
  }, rest), out);
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  fullWidth = false,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: cx('kb-tabs', 'kb-tabs--' + variant, fullWidth && 'kb-tabs--full', className)
  }, rest), items.map(it => {
    const t = typeof it === 'string' ? {
      id: it,
      label: it
    } : it;
    const sel = t.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      role: "tab",
      "aria-selected": sel,
      className: "kb-tab",
      onClick: () => onChange && onChange(t.id)
    }, t.label, t.count != null ? /*#__PURE__*/React.createElement("span", {
      className: "kb-tab__count"
    }, t.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/AccountScreen.jsx
try { (() => {
(() => {
  const {
    Card,
    Switch,
    Button,
    Icon
  } = window.KerbDesignSystem_549f9e;
  function AccountScreen() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '6px 20px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "kb-h1",
      style: {
        margin: 0
      }
    }, "Account"), /*#__PURE__*/React.createElement(Card, {
      padding: "sm",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 52,
        height: 52,
        borderRadius: 999,
        background: 'var(--marker-300)',
        font: '700 18px/1 var(--font-display)',
        color: 'var(--green-900)'
      }
    }, "MP"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 16px/22px var(--font-body)'
      }
    }, "Maya Patel"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13px/18px var(--font-body)',
        color: 'var(--fg-3)'
      }
    }, "maya.patel@example.com")), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 20,
      color: "var(--fg-3)"
    })), /*#__PURE__*/React.createElement(Card, {
      padding: "sm",
      style: {
        paddingTop: 2,
        paddingBottom: 2
      }
    }, /*#__PURE__*/React.createElement(Row, {
      icon: "credit-card",
      title: "Payment method",
      sub: "Visa ending 4417",
      right: /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        size: 20,
        color: "var(--fg-3)"
      })
    }), /*#__PURE__*/React.createElement(Row, {
      icon: "house",
      title: "Address",
      sub: "Flat 3, 18 Wilton Way, E8",
      right: /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        size: 20,
        color: "var(--fg-3)"
      }),
      last: true
    })), /*#__PURE__*/React.createElement(Card, {
      padding: "sm",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 16px/22px var(--font-display)'
      }
    }, "Notifications"), /*#__PURE__*/React.createElement(Switch, {
      labelPosition: "end",
      defaultChecked: true,
      label: "Claim updates by text"
    }), /*#__PURE__*/React.createElement(Switch, {
      labelPosition: "end",
      defaultChecked: true,
      label: "Renewal reminders"
    }), /*#__PURE__*/React.createElement(Switch, {
      labelPosition: "end",
      label: "Offers and news"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "log-out",
      fullWidth: true
    }, "Log out"));
  }
  Object.assign(window, {
    AccountScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/AccountScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ClaimFlow.jsx
try { (() => {
(() => {
  const {
    Stepper,
    Button,
    Input,
    Radio,
    Checkbox,
    Alert,
    Card,
    Icon,
    Dialog
  } = window.KerbDesignSystem_549f9e;
  const TYPES = [['car', 'Collision with another vehicle'], ['traffic-cone', 'Hit something that isn\'t a vehicle'], ['square-parking', 'Damaged while parked'], ['key-round', 'Stolen or broken into'], ['shield-alert', 'Windscreen or glass']];
  const STEPS = ['What happened', 'When and where', 'Photos', 'Review'];
  function OptionRow({
    icon,
    label,
    checked,
    onChange
  }) {
    return /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 16px',
        borderRadius: 14,
        background: 'var(--bg-surface)',
        border: '1.5px solid ' + (checked ? 'var(--green-600)' : 'var(--border-1)'),
        boxShadow: checked ? '0 0 0 3px var(--focus-halo)' : 'none',
        cursor: 'pointer',
        transition: 'border-color 120ms, box-shadow 200ms'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 22,
      color: checked ? 'var(--green-700)' : 'var(--fg-2)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        font: '500 15px/20px var(--font-body)'
      }
    }, label), /*#__PURE__*/React.createElement(Radio, {
      name: "type",
      checked: checked,
      onChange: onChange
    }));
  }
  function ClaimFlow({
    onClose,
    onSubmit
  }) {
    const [step, setStep] = React.useState(0);
    const [type, setType] = React.useState(null);
    const [hurt, setHurt] = React.useState('no');
    const [photos, setPhotos] = React.useState(2);
    const [agree, setAgree] = React.useState(false);
    const [leaving, setLeaving] = React.useState(false);
    const [sending, setSending] = React.useState(false);
    const canNext = step === 0 ? !!type : step === 3 ? agree : true;
    const next = () => {
      if (step < 3) return setStep(step + 1);
      setSending(true);
      setTimeout(() => onSubmit(TYPES.find(t => t[0] === type)[1]), 900);
    };
    const H = ({
      t,
      s
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "kb-h2",
      style: {
        margin: 0
      }
    }, t), s ? /*#__PURE__*/React.createElement("p", {
      className: "kb-body",
      style: {
        color: 'var(--fg-3)',
        margin: '6px 0 0'
      }
    }, s) : null);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-page)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 54
      }
    }, /*#__PURE__*/React.createElement(TopBar, {
      title: 'Step ' + (step + 1) + ' of 4',
      onBack: () => step ? setStep(step - 1) : setLeaving(true),
      backIcon: step ? 'arrow-left' : 'x'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 20px 0'
      }
    }, /*#__PURE__*/React.createElement(Stepper, {
      variant: "bar",
      steps: STEPS,
      current: step
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '24px 20px'
      }
    }, step === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H, {
      t: "What happened?",
      s: "Pick the closest match. You can add detail later."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, TYPES.map(([ic, l]) => /*#__PURE__*/React.createElement(OptionRow, {
      key: ic,
      icon: ic,
      label: l,
      checked: type === ic,
      onChange: () => setType(ic)
    })))) : step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H, {
      t: "When and where?"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Date",
      defaultValue: "21 Sep 2026",
      iconLeft: "calendar"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Time",
      defaultValue: "17:40",
      iconLeft: "clock"
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Where did it happen?",
      defaultValue: "Mare Street, London E8",
      iconLeft: "map-pin"
    }), /*#__PURE__*/React.createElement(Input, {
      variant: "plate",
      label: "Other driver's registration",
      optional: true,
      placeholder: "AB12 CDE"
    }), /*#__PURE__*/React.createElement("div", {
      className: "kb-field"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kb-field__label"
    }, "Was anyone hurt?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "hurt",
      label: "No",
      checked: hurt === 'no',
      onChange: () => setHurt('no')
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "hurt",
      label: "Yes",
      checked: hurt === 'yes',
      onChange: () => setHurt('yes')
    }))), hurt === 'yes' ? /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: "If anyone needs help, call 999 first"
    }, "We'll ask about injuries on the next step.") : null)) : step === 2 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H, {
      t: "Add photos",
      s: "Show the whole car, then close-ups of the damage."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 10
      }
    }, Array.from({
      length: photos
    }).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        aspectRatio: '1',
        borderRadius: 12,
        background: 'repeating-linear-gradient(135deg, var(--stone-200) 0 8px, var(--stone-100) 8px 16px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 8,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 10px/1 var(--font-mono)',
        color: 'var(--fg-3)'
      }
    }, "photo ", i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 22,
        height: 22,
        borderRadius: 999,
        background: 'var(--green-600)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    })))), photos < 6 ? /*#__PURE__*/React.createElement("button", {
      onClick: () => setPhotos(photos + 1),
      style: {
        aspectRatio: '1',
        borderRadius: 12,
        border: '1.5px dashed var(--border-strong)',
        background: 'var(--bg-surface)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        color: 'var(--green-700)',
        font: '600 13px/1 var(--font-body)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "camera",
      size: 24
    }), "Add photo") : null), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "info"
    }, "If another car was involved, a photo of its number plate helps us move faster."))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H, {
      t: "Check and submit"
    }), /*#__PURE__*/React.createElement(Card, {
      padding: "sm",
      style: {
        paddingTop: 4,
        paddingBottom: 4
      }
    }, [['What happened', TYPES.find(t => t[0] === type)[1], 0], ['When', '21 Sep 2026, 17:40', 1], ['Where', 'Mare Street, London E8', 1], ['Photos', photos + ' added', 2]].map(([k, v, s], i, a) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 0',
        borderBottom: i < a.length - 1 ? '1px solid var(--border-1)' : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "kb-caption",
      style: {
        color: 'var(--fg-3)'
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 15px/20px var(--font-body)',
        marginTop: 2
      }
    }, v)), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => setStep(s)
    }, "Edit")))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: agree,
      onChange: e => setAgree(e.target.checked),
      label: "Everything here is true to the best of my knowledge",
      description: "Giving false information can make your policy invalid."
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 20px 34px',
        background: 'var(--bg-page)',
        borderTop: '1px solid var(--border-1)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      disabled: !canNext,
      loading: sending,
      iconRight: step < 3 ? 'arrow-right' : undefined,
      onClick: next
    }, step < 3 ? 'Continue' : sending ? 'Submitting' : 'Submit claim')), /*#__PURE__*/React.createElement(Dialog, {
      open: leaving,
      contained: true,
      presentation: "sheet",
      onClose: () => setLeaving(false),
      title: "Leave this claim?",
      description: "We'll save your answers for 7 days so you can pick up where you left off.",
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "lg",
        fullWidth: true,
        onClick: onClose
      }, "Leave for now"), /*#__PURE__*/React.createElement(Button, {
        size: "lg",
        fullWidth: true,
        onClick: () => setLeaving(false)
      }, "Keep going"))
    }));
  }
  Object.assign(window, {
    ClaimFlow
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ClaimFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ClaimsScreens.jsx
try { (() => {
(() => {
  const {
    Button,
    Tabs,
    Card,
    Badge,
    Icon,
    IconButton,
    Timeline,
    Alert
  } = window.KerbDesignSystem_549f9e;
  function ClaimsScreen({
    go,
    claims
  }) {
    const [f, setF] = React.useState('open');
    const list = claims.filter(c => f === 'open' ? c.open : !c.open);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '6px 20px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "kb-h1",
      style: {
        margin: 0
      }
    }, "Claims"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      fullWidth: true,
      iconLeft: "plus",
      onClick: () => go('flow')
    }, "Start a claim"), /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      fullWidth: true,
      value: f,
      onChange: setF,
      items: [{
        id: 'open',
        label: 'Open'
      }, {
        id: 'closed',
        label: 'Closed'
      }]
    }), list.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '32px 16px',
        color: 'var(--fg-3)',
        font: '400 14px/20px var(--font-body)'
      }
    }, "No open claims. If something happens, start one here and we'll guide you.") : list.map(c => /*#__PURE__*/React.createElement(Card, {
      key: c.ref,
      interactive: true,
      padding: "sm",
      onClick: c.open ? () => go('tracker') : undefined
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 15px/20px var(--font-body)'
      }
    }, c.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 12px/16px var(--font-mono)',
        color: 'var(--fg-3)',
        marginTop: 2
      }
    }, c.ref, " \xB7 ", c.date)), /*#__PURE__*/React.createElement(Badge, {
      tone: c.open ? 'warning' : 'success',
      dot: true
    }, c.open ? 'In review' : 'Settled')))));
  }
  function TrackerScreen({
    back,
    claim
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 0 32px'
      }
    }, /*#__PURE__*/React.createElement(TopBar, {
      title: "Claim",
      onBack: back,
      right: /*#__PURE__*/React.createElement(IconButton, {
        icon: "message-circle",
        label: "Message",
        size: "lg"
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 20px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "kb-overline",
      style: {
        color: 'var(--fg-3)'
      }
    }, claim.ref), /*#__PURE__*/React.createElement("h1", {
      className: "kb-h2",
      style: {
        margin: '4px 0 10px'
      }
    }, claim.title), /*#__PURE__*/React.createElement(Badge, {
      tone: "warning",
      dot: true
    }, "In review")), /*#__PURE__*/React.createElement(Card, {
      padding: "sm"
    }, /*#__PURE__*/React.createElement(Timeline, {
      items: [{
        title: 'Claim received',
        meta: claim.date + ', 18:04',
        status: 'done'
      }, {
        title: 'Photos and details checked',
        meta: 'Today, 09:12',
        status: 'done'
      }, {
        title: 'Assessor reviewing damage',
        meta: 'Usually 1–2 working days',
        description: "We'll text you when there's an update. You don't need to do anything.",
        status: 'current'
      }, {
        title: 'Repair booked at an approved garage',
        status: 'upcoming'
      }, {
        title: 'Car back with you',
        status: 'upcoming'
      }]
    })), /*#__PURE__*/React.createElement(Card, {
      padding: "sm",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 44,
        height: 44,
        borderRadius: 999,
        background: 'var(--green-100)',
        font: '600 15px/1 var(--font-body)',
        color: 'var(--green-800)'
      }
    }, "JR"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 15px/20px var(--font-body)'
      }
    }, "Jordan Reyes"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13px/18px var(--font-body)',
        color: 'var(--fg-3)'
      }
    }, "Your claims handler")), /*#__PURE__*/React.createElement(IconButton, {
      icon: "phone",
      label: "Call Jordan",
      variant: "secondary"
    })), /*#__PURE__*/React.createElement(Alert, {
      tone: "neutral"
    }, "You'll pay your \xA3350 excess to the garage when you collect the car.")));
  }
  Object.assign(window, {
    ClaimsScreen,
    TrackerScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ClaimsScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/HomeScreen.jsx
try { (() => {
(() => {
  const {
    Wordmark,
    IconButton,
    Card,
    Badge,
    Icon,
    Stepper,
    Alert
  } = window.KerbDesignSystem_549f9e;
  function QuickAction({
    icon,
    title,
    sub,
    onClick,
    accent
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      interactive: true,
      padding: "sm",
      onClick: onClick,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        background: accent ? 'var(--marker-400)' : undefined
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 36,
        height: 36,
        borderRadius: 10,
        background: accent ? 'var(--green-900)' : 'var(--bg-brand-subtle)',
        color: accent ? 'var(--marker-400)' : 'var(--green-700)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        font: '600 15px/20px var(--font-body)',
        color: 'var(--green-900)'
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        font: '400 13px/18px var(--font-body)',
        color: accent ? 'var(--green-800)' : 'var(--fg-3)'
      }
    }, sub)));
  }
  function HomeScreen({
    go,
    claim
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '6px 20px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      size: 26
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "message-circle",
      label: "Help",
      variant: "secondary"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Notifications",
      variant: "secondary"
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "kb-body",
      style: {
        color: 'var(--fg-3)'
      }
    }, "Good morning, Maya"), /*#__PURE__*/React.createElement("div", {
      className: "kb-h1",
      style: {
        marginTop: 2
      }
    }, "You're covered.")), /*#__PURE__*/React.createElement(Card, {
      variant: "inverse",
      interactive: true,
      padding: "none",
      onClick: () => go('policy'),
      style: {
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Plate, null, "KR24 BXL"), /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      dot: true
    }, "Active")), /*#__PURE__*/React.createElement("div", {
      className: "kb-h2",
      style: {
        marginTop: 18
      }
    }, "Volkswagen Golf"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 14px/20px var(--font-body)',
        color: 'var(--fg-inverse-2)'
      }
    }, "1.5 TSI Life \xB7 2024"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr 0.7fr',
        gap: 8,
        marginTop: 20,
        paddingTop: 16,
        borderTop: '1px solid var(--border-inverse)'
      }
    }, [['Cover', 'Comprehensive'], ['Renews', '14 Mar 2027'], ['Excess', '£350']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k
    }, /*#__PURE__*/React.createElement("div", {
      className: "kb-caption",
      style: {
        color: 'var(--fg-inverse-2)'
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 14px/20px var(--font-body)',
        marginTop: 2
      }
    }, v))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(QuickAction, {
      accent: true,
      icon: "file-plus",
      title: "Start a claim",
      sub: "Takes about 5 minutes",
      onClick: () => go('flow')
    }), /*#__PURE__*/React.createElement(QuickAction, {
      icon: "phone",
      title: "Breakdown help",
      sub: "24/7 roadside"
    }), /*#__PURE__*/React.createElement(QuickAction, {
      icon: "file-text",
      title: "Documents",
      sub: "Certificate, schedule",
      onClick: () => go('policy')
    }), /*#__PURE__*/React.createElement(QuickAction, {
      icon: "user-plus",
      title: "Add a driver",
      sub: "From \xA34.10/month",
      onClick: () => go('policy')
    })), claim ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, null, "Your claim"), /*#__PURE__*/React.createElement(Card, {
      interactive: true,
      onClick: () => go('tracker'),
      padding: "sm",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 12,
        background: 'var(--warning-bg)',
        color: 'var(--warning)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "wrench",
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 15px/20px var(--font-body)'
      }
    }, claim.title), /*#__PURE__*/React.createElement("div", {
      className: "kb-mono",
      style: {
        font: '500 12px/16px var(--font-mono)',
        color: 'var(--fg-3)'
      }
    }, claim.ref)), /*#__PURE__*/React.createElement(Badge, {
      tone: "warning",
      dot: true
    }, "In review")), /*#__PURE__*/React.createElement(Stepper, {
      variant: "bar",
      steps: ['Received', 'Review', 'Repair', 'Done'],
      current: 1
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13px/18px var(--font-body)',
        color: 'var(--fg-2)'
      }
    }, "An assessor is looking at your photos. Usually 1\u20132 working days."))) : null, /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "5 years no claims"
    }, "That discount is already in your renewal price."));
  }
  Object.assign(window, {
    HomeScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/PolicyScreen.jsx
try { (() => {
(() => {
  const {
    Tabs,
    Card,
    Icon,
    IconButton,
    Switch,
    Button,
    Tooltip,
    Badge
  } = window.KerbDesignSystem_549f9e;
  function PolicyScreen() {
    const [tab, setTab] = React.useState('cover');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '6px 20px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "kb-overline",
      style: {
        color: 'var(--fg-3)'
      }
    }, "KRB-P-448120"), /*#__PURE__*/React.createElement("h1", {
      className: "kb-h1",
      style: {
        margin: '4px 0 16px'
      }
    }, "Your policy"), /*#__PURE__*/React.createElement(Tabs, {
      fullWidth: true,
      value: tab,
      onChange: setTab,
      items: [{
        id: 'cover',
        label: 'Cover'
      }, {
        id: 'docs',
        label: 'Documents'
      }, {
        id: 'drivers',
        label: 'Drivers'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        marginTop: 20
      }
    }, tab === 'cover' ? /*#__PURE__*/React.createElement(CoverTab, null) : tab === 'docs' ? /*#__PURE__*/React.createElement(DocsTab, null) : /*#__PURE__*/React.createElement(DriversTab, null)));
  }
  function CoverTab() {
    const covered = ['Damage to other people and property', 'Accidental damage to your car', 'Fire and theft', 'Windscreen and glass repair', 'Belongings in the car, up to £300'];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
      padding: "sm"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 16px/22px var(--font-display)'
      }
    }, "Comprehensive"), /*#__PURE__*/React.createElement("span", {
      className: "kb-num",
      style: {
        font: '700 16px/22px var(--font-display)'
      }
    }, "\xA338.20", /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px var(--font-body)',
        color: 'var(--fg-3)'
      }
    }, "/month"))), covered.map(c => /*#__PURE__*/React.createElement("div", {
      key: c,
      style: {
        display: 'flex',
        gap: 10,
        padding: '7px 0',
        font: '400 14px/20px var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18,
      color: "var(--green-600)"
    }), c))), /*#__PURE__*/React.createElement(Card, {
      padding: "sm"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 16px/22px var(--font-display)'
      }
    }, "Excess"), /*#__PURE__*/React.createElement(Tooltip, {
      content: "The amount you pay towards any claim. We pay the rest."
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "info",
      label: "What is excess?",
      size: "sm"
    }))), [['Compulsory', '£250'], ['Voluntary', '£100']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '6px 0',
        font: '400 14px/20px var(--font-body)',
        color: 'var(--fg-2)'
      }
    }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
      className: "kb-num"
    }, v))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0 0',
        marginTop: 4,
        borderTop: '1px solid var(--border-1)',
        font: '600 15px/20px var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "You pay per claim"), /*#__PURE__*/React.createElement("span", {
      className: "kb-num"
    }, "\xA3350"))), /*#__PURE__*/React.createElement(Card, {
      padding: "sm",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 16px/22px var(--font-display)'
      }
    }, "Extras"), /*#__PURE__*/React.createElement(Switch, {
      labelPosition: "end",
      defaultChecked: true,
      label: /*#__PURE__*/React.createElement("span", null, "Breakdown cover", /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          font: '400 13px/18px var(--font-body)',
          color: 'var(--fg-3)'
        }
      }, "\xA36.50/month \xB7 roadside and recovery"))
    }), /*#__PURE__*/React.createElement(Switch, {
      labelPosition: "end",
      label: /*#__PURE__*/React.createElement("span", null, "Courtesy car", /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          font: '400 13px/18px var(--font-body)',
          color: 'var(--fg-3)'
        }
      }, "\xA33.20/month \xB7 while yours is repaired"))
    }), /*#__PURE__*/React.createElement(Switch, {
      labelPosition: "end",
      defaultChecked: true,
      label: "Auto-renew on 14 Mar 2027"
    })));
  }
  function DocsTab() {
    const docs = [['Certificate of motor insurance', 'Proof you can legally drive'], ['Policy schedule', 'Your cover, excess and price'], ['Policy wording', 'The full terms, 38 pages'], ['Statement of fact', 'What you told us']];
    return /*#__PURE__*/React.createElement(Card, {
      padding: "sm",
      style: {
        paddingTop: 2,
        paddingBottom: 2
      }
    }, docs.map(([t, s], i) => /*#__PURE__*/React.createElement(Row, {
      key: t,
      icon: "file-text",
      title: t,
      sub: s,
      last: i === docs.length - 1,
      right: /*#__PURE__*/React.createElement(IconButton, {
        icon: "download",
        label: 'Download ' + t
      })
    })));
  }
  function DriversTab() {
    const Init = ({
      n,
      bg
    }) => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 999,
        background: bg,
        color: 'var(--green-900)',
        font: '600 14px/1 var(--font-body)',
        flex: 'none'
      }
    }, n);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
      padding: "sm",
      style: {
        paddingTop: 2,
        paddingBottom: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 0',
        borderBottom: '1px solid var(--border-1)'
      }
    }, /*#__PURE__*/React.createElement(Init, {
      n: "MP",
      bg: "var(--marker-300)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 15px/20px var(--font-body)'
      }
    }, "Maya Patel"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13px/18px var(--font-body)',
        color: 'var(--fg-3)'
      }
    }, "Licence held 9 years")), /*#__PURE__*/React.createElement(Badge, {
      tone: "inverse"
    }, "Main driver")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 0'
      }
    }, /*#__PURE__*/React.createElement(Init, {
      n: "SO",
      bg: "var(--green-100)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 15px/20px var(--font-body)'
      }
    }, "Sam Okafor"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13px/18px var(--font-body)',
        color: 'var(--fg-3)'
      }
    }, "Licence held 4 years")), /*#__PURE__*/React.createElement(Badge, {
      tone: "brand"
    }, "Named"))), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "user-plus",
      fullWidth: true
    }, "Add a driver"));
  }
  Object.assign(window, {
    PolicyScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/PolicyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/Shell.jsx
try { (() => {
(() => {
  const {
    Icon,
    IconButton
  } = window.KerbDesignSystem_549f9e;
  function TabBar({
    tab,
    onTab
  }) {
    const items = [['home', 'house', 'Home'], ['policy', 'shield-check', 'Policy'], ['claims', 'file-text', 'Claims'], ['account', 'user', 'Account']];
    return /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        height: 84,
        paddingBottom: 26,
        flex: 'none',
        background: 'rgba(255,255,255,.94)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-1)'
      }
    }, items.map(([id, ic, l]) => {
      const a = tab === id;
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onClick: () => onTab(id),
        style: {
          flex: 1,
          border: 0,
          background: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          cursor: 'pointer',
          color: a ? 'var(--green-900)' : 'var(--fg-3)',
          font: (a ? '600' : '500') + ' 11px/14px var(--font-body)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'grid',
          placeItems: 'center',
          width: 56,
          height: 30,
          borderRadius: 999,
          background: a ? 'var(--green-100)' : 'transparent',
          transition: 'background-color 200ms'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: ic,
        size: 22
      })), l);
    }));
  }
  function Screen({
    children,
    footer,
    bg
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: bg || 'var(--bg-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        paddingTop: 54
      }
    }, children), footer);
  }
  function TopBar({
    title,
    onBack,
    backIcon,
    right
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '48px 1fr 48px',
        alignItems: 'center',
        height: 52,
        padding: '0 8px'
      }
    }, /*#__PURE__*/React.createElement("div", null, onBack ? /*#__PURE__*/React.createElement(IconButton, {
      icon: backIcon || 'arrow-left',
      label: "Back",
      onClick: onBack,
      size: "lg"
    }) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        font: '600 16px/22px var(--font-body)'
      }
    }, title), /*#__PURE__*/React.createElement("div", null, right));
  }
  function SectionTitle({
    children,
    action
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "kb-h3",
      style: {
        margin: 0
      }
    }, children), action);
  }
  function Row({
    icon,
    title,
    sub,
    right,
    onClick,
    last
  }) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 0',
        borderBottom: last ? 0 : '1px solid var(--border-1)',
        cursor: onClick ? 'pointer' : 'default'
      }
    }, icon ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 12,
        background: 'var(--bg-brand-subtle)',
        color: 'var(--green-700)',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20
    })) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 15px/20px var(--font-body)'
      }
    }, title), sub ? /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13px/18px var(--font-body)',
        color: 'var(--fg-3)'
      }
    }, sub) : null), right);
  }
  function Plate({
    children,
    size = 15
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '3px 8px',
        borderRadius: 5,
        background: 'var(--marker-300)',
        color: 'var(--green-900)',
        font: '600 ' + size + 'px/1.2 var(--font-mono)',
        letterSpacing: '.1em',
        boxShadow: 'inset 0 0 0 1.5px var(--green-900)'
      }
    }, children);
  }
  Object.assign(window, {
    TabBar,
    Screen,
    TopBar,
    SectionTitle,
    Row,
    Plate
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Chrome.jsx
try { (() => {
(() => {
  const {
    Wordmark,
    Button,
    Stepper,
    IconButton,
    Icon
  } = window.KerbDesignSystem_549f9e;
  function Container({
    children,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 40px',
        ...style
      }
    }, children);
  }
  function QuoteHeader({
    step,
    onExit
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        background: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-1)',
        position: 'sticky',
        top: 0,
        zIndex: 200
      }
    }, /*#__PURE__*/React.createElement(Container, {
      style: {
        height: 72,
        display: 'grid',
        gridTemplateColumns: '200px 1fr 200px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      size: 26
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        justifySelf: 'center',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Stepper, {
      steps: ['Your car', 'About you', 'Cover', 'Pay'],
      current: step
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        justifySelf: 'end'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconLeft: "save",
      onClick: onExit
    }, "Save and exit"))));
  }
  function AppHeader({
    tab,
    onTab
  }) {
    const items = [['overview', 'Overview'], ['policies', 'Policies'], ['claims', 'Claims'], ['documents', 'Documents']];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        background: 'var(--green-900)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement(Container, {
      style: {
        height: 64,
        display: 'flex',
        alignItems: 'center',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      tone: "inverse",
      size: 24
    }), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 4,
        flex: 1
      }
    }, items.map(([id, l]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onTab(id),
      style: {
        height: 36,
        padding: '0 14px',
        borderRadius: 999,
        border: 0,
        cursor: 'pointer',
        font: '600 14px/1 var(--font-body)',
        background: tab === id ? 'rgba(255,255,255,.12)' : 'transparent',
        color: tab === id ? '#fff' : 'var(--fg-inverse-2)'
      }
    }, l))), /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Notifications",
      variant: "inverse"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 36,
        height: 36,
        borderRadius: 999,
        background: 'var(--marker-400)',
        color: 'var(--green-900)',
        font: '700 13px/1 var(--font-body)'
      }
    }, "MP")));
  }
  function PlateTag({
    children,
    size = 14
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '3px 8px',
        borderRadius: 5,
        background: 'var(--marker-300)',
        color: 'var(--green-900)',
        font: '600 ' + size + 'px/1.2 var(--font-mono)',
        letterSpacing: '.1em',
        boxShadow: 'inset 0 0 0 1.5px var(--green-900)',
        whiteSpace: 'nowrap'
      }
    }, children);
  }
  Object.assign(window, {
    Container,
    QuoteHeader,
    AppHeader,
    PlateTag
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Dashboard.jsx
try { (() => {
(() => {
  const {
    Card,
    Badge,
    Button,
    Alert,
    Timeline,
    Icon,
    IconButton,
    Tabs
  } = window.KerbDesignSystem_549f9e;
  function Stat({
    label,
    value,
    sub
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      padding: "md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kb-caption",
      style: {
        color: 'var(--fg-3)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      className: "kb-num",
      style: {
        font: '700 32px/38px var(--font-display)',
        letterSpacing: '-.025em',
        marginTop: 8
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13px/18px var(--font-body)',
        color: 'var(--fg-3)',
        marginTop: 2
      }
    }, sub));
  }
  function Dashboard({
    plan,
    justBought
  }) {
    const [ctab, setCtab] = React.useState('open');
    const th = {
      textAlign: 'left',
      font: '500 12px/16px var(--font-body)',
      color: 'var(--fg-3)',
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-1)'
    };
    const td = {
      padding: '16px',
      borderBottom: '1px solid var(--border-1)',
      font: '400 14px/20px var(--font-body)',
      verticalAlign: 'middle'
    };
    return /*#__PURE__*/React.createElement(Container, {
      style: {
        padding: '40px 40px 64px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "kb-body",
      style: {
        color: 'var(--fg-3)'
      }
    }, "Friday 25 September"), /*#__PURE__*/React.createElement("h1", {
      className: "kb-h1",
      style: {
        margin: '4px 0 0'
      }
    }, "Hi Maya, you're covered.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "phone"
    }, "Breakdown help"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconLeft: "file-plus"
    }, "Start a claim"))), justBought ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "Your cover has started"
    }, "Your certificate is in Documents and on its way to maya.patel@example.com.")) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      label: "Monthly premium",
      value: money(plan),
      sub: "Across 2 cars"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Next payment",
      value: "1 Oct",
      sub: "Visa ending 4417"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "No-claims discount",
      value: "5 yrs",
      sub: "Saving you about \xA396 a year"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Open claims",
      value: "1",
      sub: "Rear bumper repair"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) 380px',
        gap: 24,
        marginTop: 24,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "none"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 20px 12px 20px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "kb-h3",
      style: {
        margin: 0
      }
    }, "Policies"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconLeft: "plus"
    }, "Add a car")), /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Car"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Cover"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Renews"), /*#__PURE__*/React.createElement("th", {
      style: {
        ...th,
        textAlign: 'right'
      }
    }, "Per month"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Status"), /*#__PURE__*/React.createElement("th", {
      style: th
    }))), /*#__PURE__*/React.createElement("tbody", null, [['KR24 BXL', 'Volkswagen Golf', 'Comprehensive', '14 Mar 2027', 38.2, ['success', 'Active']], ['LN19 TFA', 'Toyota Yaris Hybrid', 'Third party, fire & theft', '8 Oct 2026', 26.8, ['warning', 'Renews in 13 days']]].map(([p, car, cov, ren, pr, [tone, st]]) => /*#__PURE__*/React.createElement("tr", {
      key: p
    }, /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(PlateTag, {
      size: 13
    }, p), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, car))), /*#__PURE__*/React.createElement("td", {
      style: td
    }, cov), /*#__PURE__*/React.createElement("td", {
      style: td
    }, ren), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        fontWeight: 600
      }
    }, money(pr)), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: tone,
      dot: true
    }, st)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-right",
      label: 'Open ' + car,
      size: "sm"
    })))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: "Your Yaris renews on 8 October",
      action: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "secondary"
      }, "Review renewal")
    }, "The new price is \xA327.40 a month. Check your mileage and address are still right."))), /*#__PURE__*/React.createElement(Card, {
      padding: "md"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "kb-h3",
      style: {
        margin: 0
      }
    }, "Claims"), /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      value: ctab,
      onChange: setCtab,
      items: [{
        id: 'open',
        label: 'Open'
      }, {
        id: 'closed',
        label: 'Closed'
      }]
    })), ctab === 'open' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 15px/20px var(--font-body)'
      }
    }, "Rear bumper repair"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 12px/16px var(--font-mono)',
        color: 'var(--fg-3)',
        marginTop: 2
      }
    }, "KRB-C-20931 \xB7 KR24 BXL")), /*#__PURE__*/React.createElement(Badge, {
      tone: "warning",
      dot: true
    }, "In review")), /*#__PURE__*/React.createElement(Timeline, {
      items: [{
        title: 'Claim received',
        meta: 'Mon 21 Sep',
        status: 'done'
      }, {
        title: 'Photos checked',
        meta: 'Tue 22 Sep',
        status: 'done'
      }, {
        title: 'Assessor reviewing damage',
        meta: 'Usually 1–2 working days',
        status: 'current'
      }, {
        title: 'Repair booked',
        status: 'upcoming'
      }]
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 0'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 15px/20px var(--font-body)'
      }
    }, "Windscreen chip"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 12px/16px var(--font-mono)',
        color: 'var(--fg-3)',
        marginTop: 2
      }
    }, "KRB-C-17402 \xB7 3 Feb 2026")), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Settled")))));
  }
  Object.assign(window, {
    Dashboard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/QuoteSteps.jsx
try { (() => {
(() => {
  const {
    Input,
    Button,
    Card,
    Select,
    Radio,
    Checkbox,
    CoverageOption,
    Tabs,
    Alert,
    Badge,
    Icon,
    Tooltip,
    IconButton
  } = window.KerbDesignSystem_549f9e;
  const PLANS = {
    tp: {
      name: 'Third party',
      price: 29.4
    },
    tpft: {
      name: 'Third party, fire & theft',
      price: 32.1
    },
    comp: {
      name: 'Comprehensive',
      price: 38.2
    }
  };
  const money = n => '£' + n.toFixed(2);
  function StepHead({
    over,
    title,
    sub
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "kb-overline",
      style: {
        color: 'var(--fg-3)'
      }
    }, over), /*#__PURE__*/React.createElement("h1", {
      className: "kb-h1",
      style: {
        margin: '6px 0 0'
      }
    }, title), sub ? /*#__PURE__*/React.createElement("p", {
      className: "kb-body-l",
      style: {
        margin: '8px 0 0',
        color: 'var(--fg-2)'
      }
    }, sub) : null);
  }
  function CarStep({
    q,
    set
  }) {
    const [plate, setPlate] = React.useState(q.plate || 'KR24 BXL');
    const [busy, setBusy] = React.useState(false);
    const find = () => {
      setBusy(true);
      setTimeout(() => {
        setBusy(false);
        set({
          plate,
          found: true
        });
      }, 700);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      over: "Step 1 of 4",
      title: "Let's find your car",
      sub: "Enter the registration and we'll fill in the rest."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 260
      }
    }, /*#__PURE__*/React.createElement(Input, {
      variant: "plate",
      label: "Registration",
      value: plate,
      onChange: e => setPlate(e.target.value.toUpperCase())
    })), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      loading: busy,
      onClick: find,
      style: {
        height: 56
      }
    }, busy ? 'Looking up' : 'Find car')), q.found ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
      variant: "outline",
      padding: "sm",
      style: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 12,
        background: 'var(--bg-brand-subtle)',
        color: 'var(--green-700)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "car",
      size: 24
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 16px/22px var(--font-body)'
      }
    }, "Volkswagen Golf 1.5 TSI Life"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 14px/20px var(--font-body)',
        color: 'var(--fg-3)'
      }
    }, "2024 \xB7 Petrol \xB7 Manual \xB7 5 doors")), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Found"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Not your car?")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20,
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Where is it kept overnight?",
      defaultValue: "Driveway",
      options: ['Driveway', 'Garage', 'On the street', 'Car park']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Miles you drive a year",
      defaultValue: "7,500",
      suffix: "miles",
      hint: "A rough guess is fine."
    })), /*#__PURE__*/React.createElement("div", {
      className: "kb-field",
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "kb-field__label"
    }, "What do you use it for?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "use",
      label: "Social only",
      description: "Shopping, visiting friends, days out"
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "use",
      defaultChecked: true,
      label: "Social and commuting",
      description: "Includes driving to one regular place of work"
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "use",
      label: "Business",
      description: "Driving to different places for work"
    })))) : null);
  }
  function YouStep() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      over: "Step 2 of 4",
      title: "A bit about you",
      sub: "We use this to work out your price. We never sell your details."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      defaultValue: "Maya"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      defaultValue: "Patel"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Date of birth",
      defaultValue: "12 / 06 / 1991",
      iconLeft: "calendar"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Postcode",
      defaultValue: "E8 3",
      error: "Enter your full postcode, like E8 3RL"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "How long have you had your licence?",
      defaultValue: "5\u20139 years",
      options: ['Less than 1 year', '1–4 years', '5–9 years', '10+ years']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      defaultValue: "maya.patel@example.com",
      hint: "We'll send your documents here."
    })), /*#__PURE__*/React.createElement("div", {
      className: "kb-field",
      style: {
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "kb-field__label"
    }, "Any claims, accidents or convictions in the last 5 years?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 28,
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "cl",
      defaultChecked: true,
      label: "No"
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "cl",
      label: "Yes"
    }))));
  }
  function CoverStep({
    q,
    set
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      over: "Step 3 of 4",
      title: "Choose your cover",
      sub: "Prices are per month and include Insurance Premium Tax."
    }), /*#__PURE__*/React.createElement("div", {
      role: "radiogroup",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 14,
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement(CoverageOption, {
      name: "Third party",
      description: "The legal minimum",
      price: money(PLANS.tp.price),
      selected: q.plan === 'tp',
      onSelect: () => set({
        plan: 'tp'
      }),
      features: ['Damage to others', {
        label: 'Fire and theft',
        included: false
      }, {
        label: 'Your own car',
        included: false
      }, {
        label: 'Windscreen',
        included: false
      }]
    }), /*#__PURE__*/React.createElement(CoverageOption, {
      name: "Fire & theft",
      description: "Third party, plus",
      price: money(PLANS.tpft.price),
      selected: q.plan === 'tpft',
      onSelect: () => set({
        plan: 'tpft'
      }),
      features: ['Damage to others', 'Fire and theft', {
        label: 'Your own car',
        included: false
      }, {
        label: 'Windscreen',
        included: false
      }]
    }), /*#__PURE__*/React.createElement(CoverageOption, {
      name: "Comprehensive",
      description: "Covers your car too",
      flag: "Most chosen",
      price: money(PLANS.comp.price),
      selected: q.plan === 'comp',
      onSelect: () => set({
        plan: 'comp'
      }),
      features: ['Damage to others', 'Fire and theft', 'Your own car', 'Windscreen']
    })), /*#__PURE__*/React.createElement("h2", {
      className: "kb-h3",
      style: {
        margin: '36px 0 14px'
      }
    }, "Extras"), /*#__PURE__*/React.createElement(Card, {
      variant: "outline",
      padding: "sm",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: q.breakdown,
      onChange: e => set({
        breakdown: e.target.checked
      }),
      label: "Breakdown cover \xB7 \xA36.50/month",
      description: "24/7 roadside help and recovery anywhere in the UK"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      checked: q.courtesy,
      onChange: e => set({
        courtesy: e.target.checked
      }),
      label: "Courtesy car \xB7 \xA33.20/month",
      description: "A small car while yours is being repaired"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 8,
        marginTop: 24,
        maxWidth: 320
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Voluntary excess",
      defaultValue: "\xA3100",
      options: ['£0', '£100', '£250', '£500'],
      hint: "On top of the \xA3250 compulsory excess."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 30
      }
    }, /*#__PURE__*/React.createElement(Tooltip, {
      content: "Choosing a higher excess lowers your price, but you pay more if you claim."
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "info",
      label: "About excess",
      size: "sm"
    })))));
  }
  function PayStep({
    q,
    set,
    total
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      over: "Step 4 of 4",
      title: "Pay and start your cover"
    }), /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      value: q.freq,
      onChange: f => set({
        freq: f
      }),
      items: [{
        id: 'monthly',
        label: 'Monthly'
      }, {
        id: 'annual',
        label: 'Annually · save 6%'
      }]
    }), /*#__PURE__*/React.createElement(Card, {
      variant: "outline",
      padding: "md",
      style: {
        marginTop: 20,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: '1 / -1'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Card number",
      defaultValue: "4417 1234 5678 4417",
      iconLeft: "credit-card"
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Expiry",
      defaultValue: "08 / 29"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Security code",
      defaultValue: "\u2022\u2022\u2022",
      hint: "3 digits on the back"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: '1 / -1'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Cover starts",
      defaultValue: "Today, 25 Sep 2026",
      iconLeft: "calendar"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "info"
    }, "You can cancel within 14 days for a full refund, minus the days you were covered."), /*#__PURE__*/React.createElement(Checkbox, {
      checked: q.agree,
      onChange: e => set({
        agree: e.target.checked
      }),
      label: "I've read the policy summary and my answers are correct"
    })));
  }
  function Summary({
    q,
    total,
    step,
    onNext,
    onBack
  }) {
    const labels = ['Continue', 'Continue', 'Continue', 'Pay ' + money(total) + ' and start cover'];
    const disabled = step === 0 && !q.found || step === 3 && !q.agree;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "none",
      style: {
        position: 'sticky',
        top: 96,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        background: 'var(--green-900)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "kb-overline",
      style: {
        color: 'var(--fg-inverse-2)'
      }
    }, q.freq === 'annual' ? 'Your price per year' : 'Your price per month'), /*#__PURE__*/React.createElement("div", {
      className: "kb-num",
      style: {
        font: '800 48px/52px var(--font-display)',
        letterSpacing: '-.035em',
        marginTop: 6
      }
    }, step < 2 ? '—' : money(total)), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 14px/20px var(--font-body)',
        color: 'var(--fg-inverse-2)',
        marginTop: 4
      }
    }, step < 2 ? 'Your price appears once we know your car and you.' : PLANS[q.plan].name + (q.breakdown ? ' + breakdown' : '') + (q.courtesy ? ' + courtesy car' : ''))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 24px 24px'
      }
    }, [['Car', q.found ? /*#__PURE__*/React.createElement(PlateTag, null, q.plate) : '—'], ['Driver', step > 0 ? 'Maya Patel' : '—'], ['Excess', '£350']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
        borderBottom: '1px solid var(--border-1)',
        font: '400 14px/20px var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--fg-3)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, v))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      disabled: disabled,
      iconRight: step < 3 ? 'arrow-right' : 'lock',
      onClick: onNext,
      variant: step === 3 ? 'accent' : 'primary'
    }, labels[step]), step > 0 ? /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      onClick: onBack
    }, "Back") : null)));
  }
  Object.assign(window, {
    CarStep,
    YouStep,
    CoverStep,
    PayStep,
    Summary,
    PLANS,
    money
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/QuoteSteps.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.CoverageOption = __ds_scope.CoverageOption;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
