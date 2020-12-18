import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

// import Input from '../Components/Inputs/Input'
import Button from '../components/Inputs/Button'
import '../components/Styles/Login.scss'

import logo from '../assets/logo-vert.svg'
import Input from '../Components/Inputs/Input'

function Login() {
  const { register, handleSubmit } = useForm()
  const history = useHistory()

  const handleLogin = (data, e) => {
    // console.log(data)
    fetch('http://3.129.13.14:8000/login/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(res => {
        sessionStorage.setItem('Token', res.token)
        sessionStorage.setItem('Usuario', data.username)
        history.push('/dashboard')
      })

    e.target.reset()
  }

  return (
    <div className='formContainer'>
      <div className='form'>
        <Link to='/'>
          <img src={logo} />
        </Link>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label>Usuario</label>
            <input
              placeholder='Nombre de usuario'
              type='text'
              name='username'
              ref={register}
            />

          </div>
          <div>
            <label>Contraseña</label>
            <input
              placeholder='Contraseña'
              type='password'
              name='password'
              ref={register}
            />
          </div>
          {/* <Button
            textButton='Login'
            type='submit'
            onSubmit={handleSubmit(handleLogin)}
          /> */}
          {/* <input type='submit' /> */}
          <button type='submit'>Entrar</button>
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
