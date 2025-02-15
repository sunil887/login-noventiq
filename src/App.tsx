import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';

import { AppHeader, LoginScreen } from './components';
import { LocaleContext } from './context/locale-context';
import { getUserLocale } from './utils/locale-utils';

const App: React.FC = () => {
  return (
    <div className='app-container container-center full-screen'>
      <LocaleContext.Provider value={getUserLocale()}>
        <AppHeader />
        <LoginScreen />
      </LocaleContext.Provider>  
    </div>
  );
};

export default App;
