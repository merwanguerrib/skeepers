import React, { Fragment } from 'react'
import { UserType } from '../commonTypes/user'


function User(user:UserType):JSX.Element {
  return (
    <Fragment>
    Display here the full content of 1 user from the 20: name, location and
    email and make them editable (in the dom only)
  </Fragment>
  )
}



export default User
