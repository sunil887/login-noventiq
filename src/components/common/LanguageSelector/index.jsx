import PropTypes from 'prop-types';

import { SUPPORTED_LOCALES } from '../../../constants/locales';
import { useTranslation } from '../../../hooks';

const LanguageSelector = ({ handleLanguageChange, currentLocale }) => {
  const { translate } = useTranslation(currentLocale);

  return (
    <select id="language" 
      className='border border-dark-subtle no-border-input br-5'
      name="language"
      onChange={handleLanguageChange}>
      {SUPPORTED_LOCALES.map((locale) => {
        return (
          <option key={locale.value} value={locale.value}> {translate(locale.label)}</option>
        )
      })}
    </select>)
}

LanguageSelector.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired,
  currentLocale: PropTypes.string.isRequired
};

export default LanguageSelector;