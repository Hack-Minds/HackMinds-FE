import React from 'react'
import '../Styles/Button.scss'

function Button({ textButton, type }) {
  return (
    <button className='buttonBase' type={type}>
      {textButton}
    </button>
  )
}

export default Button
