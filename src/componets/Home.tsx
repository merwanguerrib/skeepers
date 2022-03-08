import React, { useState, useEffect, Fragment } from 'react'
const ENDPOINT_RANDOM_USERS = 'https://randomuser.me/api/?results=20';


function Home():JSX.Element {
  type User = {
    name:{
      title: string;
      first: string;
      last: string;
    };
    login:{
      uuid:string
    }
  }
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    if(users.length === 0){
      try {
        const response = await fetch(ENDPOINT_RANDOM_USERS)
        const usersArr = await response.json()
         setUsers(usersArr.results)
       } catch (error) {
         console.error(error)
       }
    }
  }

  useEffect(() => {
    fetchUsers()
    console.table(users)
      },[users])

  return (
    <Fragment>
      {
      users.map((user: { name: { title: string; first: string; last: string; }, login:{uuid:string} }) => { 
        return(
        <div key={user.login.uuid}><p>{user.name.title} {user.name.first} {user.name.last}</p></div>
        )
      })
      }
    </Fragment>
  )
}

export default Home