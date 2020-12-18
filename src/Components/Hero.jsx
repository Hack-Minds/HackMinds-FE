import React from 'react'
import '../Components/Styles/Hero.scss'
import LogoHero from '../assets/logo-vert.svg'

const Hero = () => {
    return (
        <div className="hero__container">
            <div className="hero__logo--container">
                <img src={LogoHero} alt=""className="hero__logo"/>
            </div>
            <div className="hero__slogan--container">
                <h1 className="hero__slogan">La APP que te ayuda a aprender rápido y eficiente</h1>
            </div>
        </div>
    )
}

export default Hero
