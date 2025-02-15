import { useState, ChangeEvent } from 'react';
import { useLocaleContext, useTranslation } from '../../hooks';
import { EmailInput, LanguageSelector, PasswordInput, Switch } from '..';
import LabelForm from '../common/form/FormLabel';
import FormElementContainer from '../common/form/FormElementContainer';
import { checkIsValidEmail } from '../../utils';

const LoginScreen: React.FC = () => {
  const { locale, setLocale } = useLocaleContext();
  const { translate } = useTranslation(locale);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value);
  };

  const handleEmailChange = (emailVal: string) => {
    setEmail(checkIsValidEmail(emailVal) ? emailVal : '');
  };

  const handlePasswordChange = (passwordVal: string) => {
    setPassword(passwordVal);
  };

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (isLoginAllowed()) {
        alert(`User with ${email} has logged in successfully`);
      }
    }, 2000);
  };

  const isLoginAllowed = () => {
    return !!(email && password);
  };

  return (
    <div className="col-xl-4 col-md-10 col-sm-10">
      <div className="form-container">
        <div className="form-group row p-3">
          <LabelForm htmlFor="language">{translate("login.form.email")} :</LabelForm>
          <EmailInput
            handleEmailChange={handleEmailChange}
            errorMessage={translate('login.form.error.invalid.email')}
          />
        </div>

        <div className="form-group row p-3">
          <LabelForm htmlFor="language">{translate("login.form.password")} :</LabelForm>
          <PasswordInput
            handlePasswordChange={handlePasswordChange}
            forgotPasswordLabel={translate('login.form.password.forgot')}
          />
        </div>

        <div className="form-group row p-3">
          <LabelForm htmlFor="language">{translate("login.form.language")} :</LabelForm>
          <FormElementContainer>
            <LanguageSelector
              handleLanguageChange={handleLanguageChange}
              currentLocale={locale}
            />
            <div className="d-flex">
              <Switch label={translate("login.form.switch")} />
            </div>
          </FormElementContainer>
        </div>
      </div>
      <div className="d-flex justify-content-center m-2">
        <button
          type="button"
          disabled={!isLoginAllowed()}
          onClick={handleLogin}
          className="btn btn-dark w-75"
        >
          {translate("login.form.button.login")}
          {isLoading && <span className="spinner-border spinner-border-sm me-2 ps-1 ms-1"></span>}
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
