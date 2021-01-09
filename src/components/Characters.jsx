import React, {useState, useEffect} from 'react'
import "./Character.css"
function Characters() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(respuesta => setCharacters(respuesta.results))
    },[])
    console.log(characters)
    return (
        <div className="characters-container">
            {characters.map(({name,gender,species,image }) => 
            <div className="character-card">
                <h2>{name}</h2>
                <img src={image} alt={name}/>
                <div className="desc">
                    <p>Sprecie: {species === 'Human' ? "Human 🙍‍♂️" : "Alien 👽" }</p>
                    <p>Gender: {gender}</p>
                </div>
            </div>
            )}
        </div>
    )
}

export default Characters
