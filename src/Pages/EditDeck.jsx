import React from 'react'
import NavBar from '../components/NavBar'
import Input from '../Components/Inputs/Input'
import Button from '../components/Inputs/Button'
import PreviewCard from '../components/Cards/PreviewCard'
import '../components/Styles/EditDeck.scss'

function EditDeck() {
  return (
    <>
      <NavBar />
      <div className='editDeck'>
        <div className='editDeck--grid'>
          <div className='editDeck--form'>
            <h3>Nueva tarjeta</h3>
            <form>
              <div>
                <label>Concepto</label>
                <Input type='text' />
              </div>
              <div>
                <label>Definición</label>
                <Input type='text' />
              </div>
              <Button textButton='Añadir' />
            </form>
          </div>
          <div className='editDeck--cards'>
            <h3>Nombre del deck</h3>
            <div className='editDeck--cards-scroll'>
              <PreviewCard />
              <PreviewCard />
              <PreviewCard />
              <PreviewCard />
              <PreviewCard />
              <PreviewCard />
            </div>
            <Button textButton='Guardar' />
          </div>

        </div>
      </div>
    </>

  )
}

export default EditDeck
