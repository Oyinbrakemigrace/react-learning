import React from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
import { useSelector } from 'react-redux';

function Login() {
  const dispatch = useDispatch()
  const username = useSelector((state)=>state.username.value)
  return (
    <div>
      <h1>Login Page of : {username.myName}</h1>
      <button
        onClick={() =>
          dispatch(login({ name: "Grace", age: 20, email: "grace@email.com" }))
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Login