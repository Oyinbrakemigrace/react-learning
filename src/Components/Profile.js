import React from 'react'
import { useSelector } from 'react-redux'


function Profile() {
  const user = useSelector((state)=>state.user.value)
  const theme = useSelector((state)=>state.theme.value)
  const username = useSelector((state)=>state.username.value)

  return (
    <div style={{color: theme}}>
        <h1>Profile page of : {username.myName} </h1>
        <p>Name: {user.name} </p>
        <p>Age: {user.age} </p>
        <p>Email: {user.email} </p>
    </div>
  )
}

export default Profile