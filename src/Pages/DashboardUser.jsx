import React from 'react'
import NavBar from '../components/NavBar'

function DashboardUser() {
  const user = sessionStorage.getItem('Usuario')

  return (
    <div>
      <NavBar />
      DashboardUser
      <h4>{user}</h4>
    </div>
  )
}

export default DashboardUser
