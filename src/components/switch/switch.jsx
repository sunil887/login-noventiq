import { useState } from "react";
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";

export const Switch = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        name="switch"
        id="switch"
        checked={isChecked}
        onChange={handleToggle}
      />
      {label && <label className="form-check-label" htmlFor="switch">{label}</label>}
    </div>
  );
};

Switch.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string
};