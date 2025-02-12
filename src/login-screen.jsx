import { useLocaleContext, useTranslation } from './hooks';
import { SUPPORTED_LOCALES } from './constants/locales'; 
import { EmailInput } from './components';
import { useState } from 'react';
import { PasswordInput } from './components/password-input';

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

     console.log(payload, 'payload');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className='form-container'>
        <div>
          <label htmlFor="email"> {translate("login.form.email")} : </label>
          <EmailInput handleEmailChange={handleEmailChange} />
        </div>
        
        <div>
          <label htmlFor="password"> {translate("login.form.password")} : </label>
          <PasswordInput handlePasswordChange={handlePasswordChange} />
        </div>

        <div>  
          <label htmlFor="language"> {translate("login.form.language")} : </label>
          <select id="language" name="language" onChange={handleLanguageChange}>
            {SUPPORTED_LOCALES.map((locale) => {
              return (
                <option key={locale.value} value={locale.value}> {locale.label}</option>
              )
            })}
          </select>
        </div>

        <button> Log In </button>
      </div>
    </form>
  )
}

export default LoginScreen;