import { act, useEffect, useState } from "react";
import { useLocaleContext } from "./use-locale-context"


export const useTranslation = (locale) => {
  // const { locale } = useLocaleContext();
  const [ activeLocaleData, setActiveLocaleData ] = useState({});

  useEffect(() => {
    const loadActiveLocale = async () => {
      const filePath = `./locale/${locale.toLocaleLowerCase()}.js`;
      const response  = await fetch(filePath);

      if (!response.ok) {
        throw new Error('Failed to load locale data');
      }
      const localeData = await response.json();

      setActiveLocaleData(localeData);
      console.log(localeData, 'XXX');
    }
    
    loadActiveLocale();
  }, [locale])
  
  const translate = (key) => {
    console.log(activeLocaleData[key], key, 'activeLocaleData[key]')
    
    return activeLocaleData[key] 
  }
  
  return { translate }
}