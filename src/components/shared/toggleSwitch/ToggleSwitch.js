import React from "react";
import PropTypes from "prop-types";
import "./ToggleSwitch.scss";

/*
Toggle Switch Component
Note: id, checked and onChange are required for ToggleSwitch component to function. The props name, small, disabled
and optionLabels are optional.
Usage: <ToggleSwitch id="id" checked={value} onChange={checked => setValue(checked)}} />
*/

const ToggleSwitch = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled
}) => {
  const handleKeyPress = (e) => {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    onChange(!checked);
  }

  return (
    <div className={"toggle-switch" + (small ? " small-switch" : "")}>
        <input
            type="checkbox"
            name={name}
            className="toggle-switch-checkbox"
            id={id}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
        />
        {id ? (
            <label
            className="toggle-switch-label"
            tabIndex={disabled ? -1 : 1}
            onKeyDown={(e) => handleKeyPress(e)}
            htmlFor={id}
            >
            <span
                className={
                disabled
                    ? "toggle-switch-inner toggle-switch-disabled"
                    : "toggle-switch-inner"
                }
                data-yes={optionLabels[0]}
                data-no={optionLabels[1]}
                tabIndex={-1}
            />
            <span
                className={
                !checked
                    ? "text-center toggle-switch-switch toggle-switch-switch-ecommerce"
                    : "text-center toggle-switch-switch toggle-switch-switch-invoice"
                }
                tabIndex={-1}
            >
              {!checked
                ? <span>Fetchie for eCommerce</span>
                : <span>Fetchie for invoices</span>
              }
            </span>
            </label>
        ) : null}
    </div>
  );
};

// Set optionLabels for rendering.
ToggleSwitch.defaultProps = {
  optionLabels: ["Fetchie for invoices", "Fetchie for eCommerce"]
};

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool
};

export { ToggleSwitch };
