import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from '../Components/Inputs/Input'
import Button from '../components/Inputs/Button'
import '../components/Styles/Login.scss'

import logo from '../assets/logo-vert.svg'

function Signin() {
  const { register, handleSubmit } = useForm()

  const handleSignin = (data, e) => {
    console.log(data)
    fetch('http://3.129.13.14:8000/signup/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        // 'Content-type': 'multipart/form-data'
        'Content-type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
    e.target.reset()
  }

  return (
    <div className='formContainer'>
      <div className='form'>
        <Link to='/'>
          <img src={logo} />
        </Link>
        <form onSubmit={handleSubmit(handleSignin)}>
          <div>
            <label>Usuario</label>
            {/* <Input placeholder='Usuario' type='text' /> */}
            <input
              placeholder='Usuario'
              type='text'
              name='username'
              ref={register}
            />
          </div>
          <div>
            <label>Contraseña</label>
            {/* <Input placeholder='Contraseña' type='password' /> */}
            <input
              placeholder='Contraseña'
              type='password'
              name='password'
              ref={register}
            />
          </div>
          <Button textButton='Crear Cuenta' type='submit' />
        </form>
        <div>
          <a>Log In</a>
        </div>
      </div>

    </div>
  )
}

export default Signin