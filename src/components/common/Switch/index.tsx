import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface SwitchProps {
  label?: string;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

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

export default Switch;
