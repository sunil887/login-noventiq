import { useState } from "react"
import PropTypes from 'prop-types';

import { isValidEmail } from "../utils";
import FormElementContainer from "./formElementContainer";

export const EmailInput = ({ handleEmailChange, errorMessage }) => {

  const [email, setEmail] = useState('');
  const [localErrorMessage, setLocalErrorMessage] = useState('');

  const onEmailChange = (event) => {
    const emailVal = event.target.value;
    setEmail(emailVal);

    const errorMsg = isValidEmail(emailVal) || emailVal === '' ? '' : errorMessage;
    setLocalErrorMessage(errorMsg);

    if (isValidEmail) {
      handleEmailChange(emailVal)
    }
  }

  return (
    <>
      <FormElementContainer>
        <input
          className="border border-dark-subtle no-border-input br-5"
          data-testid="email-input"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          />
          {<div className="error-msg"> {localErrorMessage} </div>}
      </FormElementContainer>
      
    </>)
}

EmailInput.defaultProps = {
  errorMessage: "Invalid Email"
}

EmailInput.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};