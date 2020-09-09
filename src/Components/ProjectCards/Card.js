import React from 'react'
import movieFight from '../../projectImages/movieFight.png'
import "./Cards.css"

const Card = () => {
    return (
        <div className="card container">
            <div className="image holder">
                <img src={movieFight}/>
                <div className="text-holder">

                </div>
            </div>

        </div>
    )
}

export default Card;