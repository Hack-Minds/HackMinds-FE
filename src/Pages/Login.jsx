import React from 'react'
import Input from '../Components/Inputs/Input'

const Login = () => {
    return (
        <>
            <Input type="text" placeholder="Mail" />
            <Input type="password" placeholder="Password" />
            <Input type="textarea" placeholder="TextArea" />
            <Input type="checkbox" placeholder="Mail" />
        </>
    )
}

export default Login
