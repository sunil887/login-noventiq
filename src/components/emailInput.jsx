import { useState } from "react"
import PropTypes from 'prop-types';

import { isValidEmail } from "../utils";
import FormElementContainer from "./formElementContainer";

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
    <FormElementContainer>
      <input
        className="border-0 no-border-input"
        data-testid="email-input"
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={onEmailChange}
        />
        {errorMessage && <div> {errorMessage} </div>}
      </FormElementContainer>)
}

EmailInput.propTypes = {
  handleEmailChange: PropTypes.func.isRequired
};