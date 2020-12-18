import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../App.scss'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signin from '../Pages/Signin'
import DashboardUser from '../Pages/DashboardUser'
import EditDeck from '../Pages/EditDeck'
import PlayDeck from '../Pages/PlayDeck'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/dashboard' component={DashboardUser} />
        <Route exact path='/editDeck' component={EditDeck} />
        <Route exact path='/playDeck' component={PlayDeck} />
      </Switch>
    </BrowserRouter>

  )
}

export default App
