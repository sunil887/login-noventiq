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
      password,
      language: locale
     }
     
     alert(`User with ${email} has logged in succesfully`);
     console.log(payload, 'payload');
  }

  return (
    <div>
    <div className='col-sm-12 form-container'> 
      <form onSubmit={onFormSubmit}>
        <div className='form-group row p-3'>
          <LabelForm htmlFor="language"> {translate("login.form.email")} : </LabelForm>
          <EmailInput handleEmailChange={handleEmailChange} />
        </div>
        
        <div className='form-group row p-3'>
          <LabelForm htmlFor="language"> {translate("login.form.password")} :</LabelForm>
          <PasswordInput handlePasswordChange={handlePasswordChange} />
        </div>

        <div className='form-group row p-3'>  
          <LabelForm htmlFor="language">  {translate("login.form.language")} :</LabelForm>
          <FormElementContainer>
            <select id="language" className='border-0 no-border-input' name="language" onChange={handleLanguageChange}>
              {SUPPORTED_LOCALES.map((locale) => {
                return (
                  <option key={locale.value} value={locale.value}> {translate(locale.label)}</option>
                )
              })}
            </select>
          </FormElementContainer>
        </div>
        <Switch label={translate("login.form.switch")}/>
    </form>
    </div>
    <div className='d-flex justify-content-center m-md-4'>
      <button type="button" onClick={onFormSubmit} className="btn btn-dark w-75"> Log In </button>
    </div>
        
    </div>
  )
}

export default LoginScreen;