import React from 'react'
import '../App.scss'
import NavBar from '../Components/NavBar'
import Login from '../Pages/Login'
import Home from '../Pages/Home'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home />
      <Login />
    </div>
  )
}

export default App
