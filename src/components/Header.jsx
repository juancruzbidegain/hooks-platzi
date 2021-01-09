import React, {useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext'



export default  function Header() {
    const {darkMode, setDarkMode} = useContext(ThemeContext)
    
    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div classNames="header"> 
            <h4>ReactHoocks</h4>
            <button 
            className="btn"
            type="button" 
            onClick={handleClick}>
            {darkMode ? 'Modo Normal' : 'Modo Oscuro'}
            </button>
            
        </div>
    )
}


