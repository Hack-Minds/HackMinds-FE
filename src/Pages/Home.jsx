import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Components/Hero'
import Button from '../Components/Inputs/Button'
import '../Components/Styles/Home.scss'

const Home = () => {
    return (
        <>
            <div className="homemenu__container">
                <ul className="homemenu__list">
                    <li className="homemenu__item">
                        <Link to='/login'>
                            <Button textButton="Iniciar sesión" />
                        </Link>
                    </li>
                    <li className="homemenu__item">
                        <a href="#" className="link">Comunity</a>
                    </li>
                </ul>
            </div>

            <div className="home__container">
                <Hero />
            </div>
        </>
    )
}

export default Home
