import { useEffect, useState } from "react";

interface LocaleData {
  [key: string]: string;
}

export const useTranslation = (locale: string) => {
  const [activeLocaleData, setActiveLocaleData] = useState<LocaleData>({});

  useEffect(() => {
    const loadActiveLocale = async () => {
      const filePath = `./locale/${locale.toLocaleLowerCase()}.js`;
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error('Failed to load locale data');
      }
      const localeData: LocaleData = await response.json();

      setActiveLocaleData(localeData);
    }

    loadActiveLocale();
  }, [locale]);

  const translate = (key: string): string | undefined => {
    return activeLocaleData[key];
  }

  return { translate };
};
