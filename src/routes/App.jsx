import React from 'react'
import '../App.scss'
import NavBar from '../Components/NavBar'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
// import PlayDeck from '../Components/PlayDeck'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home />
      <Login />
      {/* <PlayDeck /> */}
    </div>
  )
}

export default App