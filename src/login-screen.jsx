import { useLocaleContext, useTranslation } from './hooks';
import { SUPPORTED_LOCALES } from './constants/locales'; 
import { EmailInput, PasswordInput, Switch} from './components';
import { useState } from 'react';
import LabelForm from './components/FormLabel';
import FormElementContainer from './components/formElementContainer';

const LoginScreen = () => {
  
  const { locale, setLocale } = useLocaleContext();
  const { translate } = useTranslation(locale);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLanguageChange = (event) => {
   console.log(event.target.value, locale, navigator.language);
  
   setLocale(event.target.value);
  }

  const handleEmailChange = (emailVal) => {
    setEmail(emailVal);
  }

  const handlePasswordChange = (passwordVal) => {
    setPassword(passwordVal);
  }

  const onFormSubmit = () => {
     const payload = {
      email,
      password
     }
     
     if (isLoginAllowed()) {
      alert(`User with ${email} has logged in succesfully`);
     }
     
     console.log(payload, 'payload');
  }

  const isLoginAllowed = () => {
    return !!(email && password)
  }

  return (
    <div className='col-lg-4 col-md-10 col-sm-10'>
    <div className='form-container'> 
      <form onSubmit={onFormSubmit}>
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
            <select id="language" className='border border-dark-subtle no-border-input br-5' name="language" onChange={handleLanguageChange}>
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
    </form>
    </div>
    <div className='d-flex justify-content-center m-md-4'>
      <button
        type="button"
        disabled={!isLoginAllowed()}
        onClick={onFormSubmit} 
        className="btn btn-dark w-75">
          {translate("login.form.button.login")}
        </button>
    </div>
        
    </div>
  )
}

export default LoginScreen;