import React from 'react'

const Cards = ({ dog }) => {
    return (
        <div className="card">
            <img src={dog.image} alt={dog.breed.name} />
            <p>Breed</p>
        </div>
    )
}

export default Cards
