import React, { useState, useEffect, Fragment } from 'react'
import { UserType } from '../commonTypes/user';
import UserCard from './UserCard';
const ENDPOINT_RANDOM_USERS = 'https://randomuser.me/api/?results=20';


function Home():JSX.Element {
  const [users, setUsers] = useState<UserType[]>([])

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
      },[users])

  return (
    <Fragment>
      {
      users.map((user:UserType) => { 
        return(
        <UserCard {...user} key={user.login.uuid} />
        )
      })
      }
    </Fragment>
  )
}

export default Home