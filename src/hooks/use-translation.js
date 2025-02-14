import { useEffect, useState } from "react";


export const useTranslation = (locale) => {
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
    }
    
    loadActiveLocale();
  }, [locale])
  
  const translate = (key) => {
    return activeLocaleData[key] 
  }
  
  return { translate }
}