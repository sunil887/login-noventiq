import React, { ChangeEvent } from 'react';
import { SUPPORTED_LOCALES } from '../../../constants/locales';
import { useTranslation } from '../../../hooks';

interface Locale {
  value: string;
  label: string;
}

interface LanguageSelectorProps {
  handleLanguageChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  currentLocale: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ handleLanguageChange, currentLocale }) => {
  const { translate } = useTranslation(currentLocale);

  return (
    <select
      id="language"
      data-testid="language-selector-test-id"
      className="border border-dark-subtle no-border-input br-5"
      name="language"
      onChange={handleLanguageChange}
    >
      {SUPPORTED_LOCALES.map((locale: Locale) => {
        return (
          <option key={locale.value} value={locale.value}>
            {translate(locale.label)}
          </option>
        );
      })}
    </select>
  );
};

export default LanguageSelector;
