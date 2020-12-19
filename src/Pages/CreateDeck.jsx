import React from 'react'
import Button from '../components/Inputs/Button'
import { useForm } from 'react-hook-form'
import Input from '../Components/Inputs/Input'
import '../components/Styles/CreateDeck.scss'

function CreateDeck() {

  const user = sessionStorage.getItem('Usuario')
  const token = sessionStorage.getItem('Token')

  const { register, handleSubmit } = useForm()
  
  const handleNewDeck = (data, e) => {
    console.log(data)
    fetch('http://3.129.13.14:8000/decks/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Authorization': 'Token ' + token,
        'Content-type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(res => console.log(res))

    e.target.reset()
  }

  return (
    <div className='createDeckContainer'>
      <div className='createDeck'>
        <h3>Crea un nuevo deck</h3>
        <form onSubmit={handleSubmit(handleNewDeck)}>
        <input 
          type="text" 
          placeholder="Nombre" 
          name="deck_name" 
          ref={register}
        />
        <input 
          type="textarea" 
          placeholder="Descripcion" 
          name="description" 
          ref={register}
        />
        <button type="submit">Añadir</button>
      </form>
      </div>
    </div>
  )
}

export default CreateDeck
