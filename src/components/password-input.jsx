import PropTypes from "prop-types";
import { useState } from "react";
import FormElementContainer from "./formElementContainer";

export const PasswordInput = ({ handlePasswordChange }) => {
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
    handlePasswordChange(event.target.value);
  }

  return (
    <FormElementContainer>
      <i className="bi bi-lock"></i>
        <input
          className="border-0 no-border-input"
          id="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          type={showPassword ? 'text': 'password'} />
        <i className="bi bi-eye-slash" id="togglePassword"></i>
    </FormElementContainer>  
  ) 
}

PasswordInput.propTypes = {
  handlePasswordChange: PropTypes.func.isRequired
};