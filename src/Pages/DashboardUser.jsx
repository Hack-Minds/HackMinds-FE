import React, { useState, useEffect }  from 'react'
import NavBar from '../components/NavBar'
import CreateDeck from '../Pages/CreateDeck'


function DashboardUser() {
  
  const user = sessionStorage.getItem('Usuario')
  const token = sessionStorage.getItem('Token')

  const [userDecks, setDecks] = useState([])

     useEffect(() => {
          fetch('http://3.129.13.14:8000/decks/',{
          method: 'GET',
          headers: {
            'Authorization': 'Token ' + token,
            'Content-type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => setDecks(data.results))
    },[])

  return (
    <div>
      <NavBar />
      DashboardUser
      <h4>{user}</h4>
      {
        userDecks && userDecks.map((item)=>{
          console.log(item)
        })
      }
      <CreateDeck></CreateDeck>
      
    </div>
  )
}

export default DashboardUser
