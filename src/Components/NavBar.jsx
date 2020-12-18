import React from 'react'
import { Link } from 'react-router-dom'
import NavBarLogo from '../assets/logo-horiz.svg'
import '../Components/Styles/NavBar.scss'

const NavBar = () => {
    return (
        <nav>
            <div className="logo__container">
                <Link to='/'>
                    <img src={NavBarLogo} alt="" />
                </Link>
            </div>
            <div className="useractions__container">
                <span className="username">
                    [Usuario]
                </span>
            </div>
        </nav>
    )
}

export default NavBar
