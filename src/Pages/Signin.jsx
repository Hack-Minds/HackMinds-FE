import React from 'react'
import Input from '../Components/Inputs/Input'
import Button from '../components/Inputs/Button'
import '../components/Styles/Login.scss'

import logo from '../assets/logo-vert.svg'

function Signin() {
  return (
    <div className='formContainer'>
      <div className='form'>
        <img src={logo} />
        <form>
          <div>
            <label>Usuario</label>
            <Input placeholder='Usuario' type='text' />
          </div>
          <div>
            <label>Contraseña</label>
            <Input placeholder='Contraseña' type='password' />
          </div>
          <Button textButton='Crear Cuenta' />
        </form>
        <div>
          <a>Log In</a>
        </div>
      </div>

    </div>
  )
}

export default Signin