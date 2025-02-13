import { useState } from "react"
import PropTypes from 'prop-types';

import { isValidEmail } from "../utils";

export const EmailInput = ({ handleEmailChange }) => {

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onEmailChange = (event) => {
    const emailVal = event.target.value;
    setEmail(emailVal);

    const errorMsg = isValidEmail(emailVal) ? '' : 'Invalid email';
    setErrorMessage(errorMsg);

    if (isValidEmail) {
      handleEmailChange(emailVal)
    }
  }

  return (
    <>
      <input
        data-testid="email-input"
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={onEmailChange}
        />
        {errorMessage && <div> {errorMessage} </div>}
    </>)
}

EmailInput.propTypes = {
  handleEmailChange: PropTypes.func.isRequired
};