import { useContext, useState } from 'react';
import { LocaleContext } from '../context/locale-context';

export const useLocaleContext = () => {
  const localeContextValue = useContext(LocaleContext);
  const [ locale, setLocale ] = useState(localeContextValue);

  return {
    locale,
    setLocale
  }
}
