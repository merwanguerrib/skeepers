import React, { useState, useEffect, Fragment } from 'react'
import { userType } from '../commonTypes/userType';
import UserCard from './UserCard';
const ENDPOINT_RANDOM_USERS = 'https://randomuser.me/api/?results=20';


function Home():JSX.Element {
  const [users, setUsers] = useState<userType[]>([])

  const fetchUsers = async () => {
    if(users.length === 0){
      try {
        const response = await fetch(ENDPOINT_RANDOM_USERS)
        const usersArr = await response.json()
        const results = usersArr.results.map((result: userType) => {
          let user = {
          name : result.name,
          location : result.location,
          email: result.email
          } as userType
          return user
        })  
         setUsers(results)
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
       users.map((user:userType,key:number) => { 
        return(
        <UserCard {...user} key={key} />
        )
      }) 
      }
    </Fragment>
  )
}

export default Home