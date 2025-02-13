import './app-header.css';
import { useLocaleContext, useTranslation } from '../../hooks';

export const AppHeader = () => {
  const { locale } = useLocaleContext();
  const { translate } = useTranslation(locale);

  return (
    <header className="header">
      <img
        src={translate("image.header.company.logo")}
        alt="noventiq Logo"
        className="logo" />
    </header>
  )
}