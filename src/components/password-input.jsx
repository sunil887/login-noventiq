import PropTypes from "prop-types";
import { useState } from "react";
import FormElementContainer from "./formElementContainer";

export const PasswordInput = ({ handlePasswordChange, forgotPasswordLabel }) => {
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
    handlePasswordChange(event.target.value);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <FormElementContainer >
      <div className="d-flex border border-dark-subtle align-items-center input-container br-5">
        <i className="bi bi-lock"></i>
        <input
          className="border-0 no-border-input"
          id="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          type={showPassword ? 'text': 'password'} />
        <i className="bi bi-eye-slash" id="togglePassword" onClick={togglePasswordVisibility}></i>
        </div>
        <div><a href="#">{forgotPasswordLabel || 'Forgot Password'}</a></div>
      </FormElementContainer>
      
    </>
  ) 
}

PasswordInput.defaultProps = {
  forgotPasswordLabel: 'Forgot Password'
}

PasswordInput.propTypes = {
  handlePasswordChange: PropTypes.func.isRequired,
  forgotPasswordLabel: PropTypes.string
};