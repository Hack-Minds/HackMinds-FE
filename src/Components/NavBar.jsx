import React from 'react'
import NavBarLogo from '../assets/logo-horiz.svg'
import '../Components/Styles/NavBar.scss'

const NavBar = () => {
    return (
        <nav>
            <div className="logo__container">
                <img src={NavBarLogo} alt=""/>
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
