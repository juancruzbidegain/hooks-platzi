import React, {useState, useEffect, useReducer} from 'react'
import "./Character.css"

const initialState = {
    favorites:[]
}
const favoriteReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favorites:[...state.favorites, action.payload]
            }
            default:
                return state;
    }
}


function Characters() {
    const [characters, setCharacters] = useState([])
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState) 
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(respuesta => setCharacters(respuesta.results ))
    
    },[])
    const handleClick = favorite => {
        dispatch({ type:'ADD_TO_FAVORITE', payload:favorite})
    }

   

    return (
        <div className="container">
            <div className="favorite-container">
                {favorites.favorites.map(fav => (
                    <div className="fav">
                        <img src={fav} alt=""/>
                    </div>
                ))}
            </div>
            <div className="characters-container">
                {characters.map(({name,gender,species,image }) => 
                    <div className="character-card">
                        <h2>{name}</h2>
                        <img src={image} alt={name}/>
                        <div className="desc">
                            <p>Sprecie: {species === 'Human' ? "Human 🙍‍♂️" : "Alien 👽" }</p>
                            <p>Gender: {gender}</p>
                        </div>
                    <button type="button" onClick={() => handleClick(image)} >🌟</button>
                    </div>
                )}
            </div>
        </div>
        
    )
}


export default Characters
