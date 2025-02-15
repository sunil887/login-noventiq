import React, { useState, ChangeEvent } from "react";
import FormElementContainer from "../form/FormElementContainer";

interface PasswordInputProps {
  handlePasswordChange: (password: string) => void;
  forgotPasswordLabel?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ handlePasswordChange, forgotPasswordLabel = 'Forgot Password' }) => {
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    handlePasswordChange(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const eyeIconClasses = `bi bi-eye-slash hover-effect cursor-pointer ${showPassword ? 'icon-active-color' : ''}`;

  return (
    <>
      <FormElementContainer>
        <div className="d-flex border border-dark-subtle align-items-center input-container br-5">
          <i className="bi bi-lock"></i>
          <input
            data-testid="pswd-input-testid"
            className="border-0 no-border-input"
            id="password"
            name="password"
            value={password}
            onChange={onPasswordChange}
            type={showPassword ? 'text' : 'password'}
          />
          <i
            data-testid="togglePassword-testid"
            className={eyeIconClasses}
            id="togglePassword"
            onClick={togglePasswordVisibility}
          />
        </div>
        <div>
          <a href="#">{forgotPasswordLabel}</a>
        </div>
      </FormElementContainer>
    </>
  );
};

export default PasswordInput;
