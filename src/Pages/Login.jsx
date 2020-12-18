import React from 'react'
import Button from '../components/Inputs/Button'
import '../components/Styles/Login.scss'

function Login() {
  return (
    <div>
      <div className='formContainer'>
        <form>
          <div>
            <input placeholder='e-mail' />
          </div>
          <div>
            <input placeholder='password' />
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
