import { useState } from "react"
import PropTypes from 'prop-types';

import { checkIsValidEmail } from "../../../utils";
import FormElementContainer from "../form/FormElementContainer";

const EmailInput = ({ handleEmailChange, errorMessage }) => {

  const [email, setEmail] = useState('');
  const [localErrorMessage, setLocalErrorMessage] = useState('');

  const onEmailChange = (event) => {
    const emailVal = event.target.value;
    setEmail(emailVal);

    const errorMsg = checkIsValidEmail(emailVal) || emailVal === '' ? '' : errorMessage;
    setLocalErrorMessage(errorMsg);

    if (checkIsValidEmail(emailVal)) {
      handleEmailChange(emailVal)
    }
  }

  return (
    <>  
      <FormElementContainer>
      <div className="d-flex border border-dark-subtle align-items-center input-container br-5">
      <span><i className="bi bi-envelope pd-r-4"></i></span>
        <input
          className=" no-border-input br-5"
          data-testid="email-input"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          />
        </div>
          {<div className="error-msg"> {localErrorMessage} </div>}
      </FormElementContainer>
      
    </>)
}

EmailInput.defaultProps = {
  errorMessage: "Invalid email"
}

EmailInput.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default EmailInput;