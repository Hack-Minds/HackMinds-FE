import React from 'react'
import '../Styles/Button.scss'

function Button({ textButton }) {
  return (
    <button className='buttonBase'>
      {textButton}
    </button>
  )
}

export default Button
