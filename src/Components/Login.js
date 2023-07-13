import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/users'

function Login() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(login({ name: "grace", age: 20, email: "grace@email.com" }))}>
        Login
      </button>
      <button onClick={()=> dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Login