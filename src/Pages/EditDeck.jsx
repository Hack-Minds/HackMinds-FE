import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import NavBar from '../components/NavBar'
import Input from '../Components/Inputs/Input'
import Button from '../components/Inputs/Button'
import PreviewCard from '../components/Cards/PreviewCard'
import '../components/Styles/EditDeck.scss'

function EditDeck() {
  const [concepts, setConcepts] = useState([])

  const { register, handleSubmit } = useForm()

  const handleCard = (data, e) => {
    console.log(data)
    e.target.reset()
  }

  return (
    <>
      <NavBar />
      <div className='editDeck'>
        <div className='editDeck--grid'>
          <div className='editDeck--form'>
            <h3>Nueva tarjeta</h3>
            <form onSubmit={handleSubmit(handleCard)}>
              <div>
                <label>Concepto</label>
                {/* <Input type='text' /> */}
                <input
                  type='text'
                  name='concept'
                  ref={register}
                />
              </div>
              <div>
                <label>Definición</label>
                {/* <Input type='text' /> */}
                <input
                  type='text'
                  name='definition'
                  ref={register}
                />
              </div>
              <Button textButton='Añadir' type='submit' />
            </form>
          </div>
          <div className='editDeck--cards'>
            <h3>Nombre del deck</h3>
            <div className='editDeck--cards-scroll'>
              <PreviewCard concept='hola' definition='jaja' />
            </div>
            <Button textButton='Guardar' />
          </div>

        </div>
      </div>
    </>

  )
}

export default EditDeck
