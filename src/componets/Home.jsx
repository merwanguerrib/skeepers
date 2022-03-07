import React, { useState, useEffect } from 'react'
const ENDPOINT_RANDOM_USERS = 'https://randomuser.me/api/?results=20';


function Home() {
  const [users, setUsers] = useState()

  const fetchUsers = async () => {
    try {
      await fetch(ENDPOINT_RANDOM_USERS)
        .then(response => response.json())
        .then(data => setUsers(data.results))
    } catch (error) {
      console.error(error)
    }
  }



  useEffect(() => {
    fetchUsers()
    console.log(users)
  }, [])

  return (
    users.map((user) => { return (<div><p>{user.name.title} {user.name.first} {user.name.last}</p></div>) })
    // <> Get 20 users from ENDPOINT_RANDOM_USERS and display them: name only.</>
  )
}

export default Home