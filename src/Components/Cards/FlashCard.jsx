import React from 'react'
import '../Styles/FlashCard.scss'
import Button from '../../Components/Inputs/Button'
import leftArrow from '../../assets/left.svg'
import rightArrow from '../../assets/right.svg'

const FlashCard = () => {
    return (
        <> 
            <div className="flashcard__container">
                <div className="card__title">
                    <h3>Hoisting</h3>
                </div>
                <div className="card__button">
                    <Button textButton="Revelar"></Button>
                </div>
                <div className="card__description">
                    <p>
                        Lorem ipsum dolor sit, 
                        amet consectetur adipisicing elit. 
                        Iste tempora praesentium facere eius 
                        dolor pariatur debitis blanditiis, 
                        labore fugit alias eum aut porro 
                        ipsum id est asperiores impedit 
                        libero? Corporis!
                    </p>
                </div>
                <div className="card__checkbox">
                    <label htmlFor="">¿Quieres que te recuerde este concepto?</label>
                    <input type="checkbox" name="" id=""/>
                </div>
                <div className="control__left">
                    <a href="#">
                        <img src={leftArrow} alt=""/>
                    </a>
                </div>
                <div className="control__right">
                    <a href="#">
                        <img src={rightArrow} alt=""/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default FlashCard
