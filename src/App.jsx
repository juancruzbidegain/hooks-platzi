import './App.css';
import React, {useState} from 'react'
import ThemeContext from "./context/ThemeContext"
import Header from "./components/Header"
import Characters from "./components/Characters"


function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
       <div className={darkMode ? 'App Dark' : 'App Light'}>
        <h1>Hola mundo</h1>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
    
   
  );
}

export default App;
