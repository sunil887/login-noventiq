import './App.css'

import LoginScreen from './login-screen';
import { LocaleContext } from './context/locale-context';
import { getUserLocale } from './utils/locale-utils';
import { useEffect } from 'react';


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
    <>
    <LocaleContext.Provider value={getUserLocale()}>
      <LoginScreen />
    </LocaleContext.Provider>  
    </>
  )
}

export default App
