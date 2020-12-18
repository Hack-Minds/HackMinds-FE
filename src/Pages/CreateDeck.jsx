import React from 'react'
import Button from '../components/Inputs/Button'
import '../components/Styles/CreateDeck.scss'

function CreateDeck() {
  return (
    <div className='createDeckContainer'>
      <div className='createDeck'>
        <h3>Crea un nuevo deck</h3>
        <form>
          <div>
            <label>Tema</label>
            <input />
          </div>
          <div>
            <label>Descripción</label>
            <input />
          </div>
          <Button textButton='Añadir' />
        </form>
      </div>
    </div>
  )
}

export default CreateDeck
