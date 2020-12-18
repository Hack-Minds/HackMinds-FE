import React from 'react'
import '../Components/Styles/PlayDeck.scss'
import Button from '../Components/Inputs/Button'

const PlayDeck = () => {
    return (
        <div className="playdeck__container">
            <div className="card__title">
                <h3>Hoisting</h3>
            </div>
            <div className="card__button">
                <Button textButton="Revelar"></Button>
            </div>
            <div className="card__description">

            </div>
            <div className="card__checkbox">

            </div>
        </div>
    )
}

export default PlayDeck
