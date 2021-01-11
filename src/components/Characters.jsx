import React, {useState, useEffect, useReducer, useMemo} from 'react'
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
    const [search, setSearch] = useState('')
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(respuesta => setCharacters(respuesta.results ))
    
    },[])
    const handleClick = favorite => {
        dispatch({ type:'ADD_TO_FAVORITE', payload:favorite})
    }

    const handleChange = e => {
        setSearch(e.target.value)
    }
   
    // const filterUsers = characters.filter(user => {
    //     // return user.name.toLowerCase().includes(search.toLowerCase())
    // })

    const filterUsers = useMemo(() =>
    characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase())
    }),[characters, search])
    

    return (
        <div className="container">
            <div className="favorite-container">
                {favorites.favorites.map(fav => (
                    <div className="fav">
                        <img src={fav} alt=""/>
                    </div>
                ))}
            </div>
            <div className="Search">
                <input type="text" value={search} onChange={handleChange}/>
            </div>
            
            <div className="characters-container">
                {filterUsers.map(({name,gender,species,image }) => 
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
