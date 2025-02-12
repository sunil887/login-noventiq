import PropTypes from "prop-types";
import { useState } from "react";

export const PasswordInput = ({ handlePasswordChange }) => {
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
    handlePasswordChange(event.target.value);
  }

  return (
    <>
      <input
        id="password"
        name="password"
        value={password}
        onChange={onPasswordChange}
        type={showPassword ? 'text': 'password'} />
      <button type="button" onClick={() => setShowPassword(!showPassword)}> eye </button>  
    </>  
  ) 
}

PasswordInput.propTypes = {
  handlePasswordChange: PropTypes.func.isRequired
};