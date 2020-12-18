import React from 'react'
import '../Styles/Input.scss'

const Input = ({ type, placeholder, name, ref }) => {
    return (

        <input
            type={type}
            placeholder={placeholder}
            name={name}
            ref={ref}
        />

    )
}

export default Input
