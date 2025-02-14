import { useState } from 'react';
import { useLocaleContext, useTranslation } from '../../hooks';

import { SUPPORTED_LOCALES } from '../../constants/locales'; 
import { EmailInput, PasswordInput, Switch } from '..';
import LabelForm from '../common/form/FormLabel';
import FormElementContainer from '../common/form/FormElementContainer';
import { checkIsValidEmail } from '../../utils';

const LoginScreen = () => {
  
  const { locale, setLocale } = useLocaleContext();
  const { translate } = useTranslation(locale);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [isLoading, setIsLoading] = useState(false)

  const handleLanguageChange = (event) => {
   setLocale(event.target.value);
  }

  const handleEmailChange = (emailVal) => {
    setEmail(checkIsValidEmail(emailVal) ? emailVal : '');
  }

  const handlePasswordChange = (passwordVal) => {
    setPassword(passwordVal);
  }

  const handleLogin = () => {
    setIsLoading(true);
    // this is to simulate  button loader on API call.
    setTimeout(() => {
      setIsLoading(false);
      if (isLoginAllowed()) {
        alert(`User with ${email} has logged in succesfully`);
      }
    }, 2000);

   
  }

  const isLoginAllowed = () => {
    return !!(email && password)
  }

  return (
    <div className='col-xl-4 col-md-10 col-sm-10'>
    <div className='form-container'> 
        <div className='form-group row p-3'>
          <LabelForm htmlFor="language"> {translate("login.form.email")} : </LabelForm>
            <EmailInput
              handleEmailChange={handleEmailChange}
              errorMessage={translate('login.form.error.invalid.email')} />
        </div>
        
        <div className='form-group row p-3'>
          <LabelForm htmlFor="language"> {translate("login.form.password")} :</LabelForm>
          <PasswordInput
            handlePasswordChange={handlePasswordChange}
            forgotPasswordLabel={translate('login.form.password.forgot')} />
        </div>

        <div className='form-group row p-3'>  
          <LabelForm htmlFor="language">  {translate("login.form.language")} :</LabelForm>
          <FormElementContainer>
            <select id="language" 
              className='border border-dark-subtle no-border-input br-5'
              name="language" onChange={handleLanguageChange}>
              {SUPPORTED_LOCALES.map((locale) => {
                return (
                  <option key={locale.value} value={locale.value}> {translate(locale.label)}</option>
                )
              })}
            </select>
            <div className='d-flex'>
              <Switch label={translate("login.form.switch")}/>
            </div>
          </FormElementContainer>
        </div>
    </div>
    <div className='d-flex justify-content-center m-md-4'>
      <button
        type="button"
        disabled={!isLoginAllowed()}
        onClick={handleLogin} 
        className="btn btn-dark w-75">
          {translate("login.form.button.login")}
          {isLoading && <span className="spinner-border spinner-border-sm me-2 ps-1 ms-1"></span>}
        </button>
    </div>
        
    </div>
  )
}

export default LoginScreen;