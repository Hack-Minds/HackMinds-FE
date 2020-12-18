import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Components/Inputs/Input'
import Button from '../components/Inputs/Button'
import '../components/Styles/Login.scss'

import logo from '../assets/logo-vert.svg'

function Login() {
  return (
    <div className='formContainer'>
      <div className='form'>
        <Link to='/'>
          <img src={logo} />
        </Link>
        <form>
          <div>
            <label>Usuario</label>
            <Input placeholder='Usuario' type='text' />
          </div>
          <div>
            <label>Contraseña</label>
            <Input placeholder='Contraseña' type='password' />
          </div>
          <Button textButton='Login' />
        </form>
        <div>
          <Link to='/signin'>Regístrate</Link>
          <a>¿Olvidaste tu contraseña?</a>
        </div>
      </div>

    </div>
  )
}

export default Login
