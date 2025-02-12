import { useLocaleContext } from "./hooks/use-locale-context";
import { useTranslation } from "./hooks/use-translation";
 

const LoginScreen = () => {
  
  const { locale, setLocale } = useLocaleContext();
  const { translate } = useTranslation(locale);

  const supportedLocales = [
    { label: "English", value: "en-US" },
    { label: "Hindi", value: "hi-IN" }
  ]
  

  

  const handleLanguageChange = (event) => {
   console.log(event.target.value, locale, navigator.language);
  
   setLocale(event.target.value);
  }

  return (
    <div>
       
      <label htmlFor="language"> {translate("Language")} : </label>
      <select id="language" name="language" onChange={handleLanguageChange}>
        {supportedLocales.map((locale) => {
          return (
            <option key={locale.value} value={locale.value}> {locale.label}</option>
          )
        })}
      </select>
    </div>
  )
}

export default LoginScreen;