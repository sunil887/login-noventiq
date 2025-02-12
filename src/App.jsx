import './App.css'

import LoginScreen from './login-screen';
import { LocaleContext } from './context/locale-context';

function App() {
   
  
  return (
    <>
    <LocaleContext.Provider value='en-US'>
      <LoginScreen />
    </LocaleContext.Provider>  
    </>
  )
}

export default App
