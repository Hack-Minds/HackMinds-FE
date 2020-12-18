import React from 'react'
import Button from '../components/Inputs/Button'
import '../components/Styles/Login.scss'

import logo from '../assets/logo-vert.svg'

function Login() {
  return (
    <div className='formContainer'>
      <div className='form'>
        <img src={logo} />
        <form>
          <div>
            <label>E-mail</label>
            <input placeholder='E-mail' />
          </div>
          <div>
            <label>Contraseña</label>
            <input placeholder='Contraseña' />
          </div>
          <Button textButton='Login' />
        </form>
        <div>
          <a>Regístrate</a>
          <a>¿Olvidaste tu contraseña</a>
        </div>
      </div>

    </div>
  )
}

export default Login
