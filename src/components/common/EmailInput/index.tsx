import { useState, ChangeEvent } from 'react';
import { checkIsValidEmail } from '../../../utils';
import FormElementContainer from '../form/FormElementContainer';

interface EmailInputProps {
  handleEmailChange: (email: string) => void;
  errorMessage?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ handleEmailChange, errorMessage = "Invalid email" }) => {
  const [email, setEmail] = useState<string>('');
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const emailVal = event.target.value;
    setEmail(emailVal);
    
    setShowErrorMessage(!(checkIsValidEmail(emailVal) || emailVal === ''));
    handleEmailChange(emailVal);
  };

  return (
    <FormElementContainer>
      <div className="d-flex border border-dark-subtle align-items-center input-container br-5">
        <span><i className="bi bi-envelope pd-r-4"></i></span>
        <input
          className="no-border-input br-5"
          data-testid="email-input-testId"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      {<div
        className={`height-10 ${ showErrorMessage ? 'error-msg-color' : 'visibility-hidden' }`}>
          {errorMessage}
        </div>}
    </FormElementContainer>
  );
};

export default EmailInput;
