import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.scss'

import LoginScreen from './login-screen';
import { LocaleContext } from './context/locale-context';
import { getUserLocale } from './utils/locale-utils';

function App() {
   
  // useEffect(() => {
  //   window.onlanguagechange = (event) => {
  //     console.log("languagechange event detected!");
  //   };

  //   return () => {
  //     // restore the original value of onlanguagechange when app unmounts
  //     window.onlanguagechange = null
  //   }
  // }, [])
  
  return (
    <div className='container container-center full-screen'>
    <LocaleContext.Provider value={getUserLocale()}>
      <LoginScreen />
    </LocaleContext.Provider>  
    </div>
  )
}

export default App
