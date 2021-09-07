import React from 'react'
import Spiner from './Spiner';


const Cards = ({ dog, updateDog, loading }) => {
    if (loading) return  <Spiner/>
    
    return (
        <div className="card bounce" onClick={()=> updateDog(dog.breed.id)}>
            <img src={dog.image} alt={dog.breed.name} />
            <p>{dog.breed.name}</p>
        </div>
    )
}

export default Cards
