import React, { useState } from 'react'
import { handleUsername } from '../features/username';
import { useDispatch } from 'react-redux';


function ChangeProfile() {
  const [updateUsername, setUpdateUsername] = useState('')
  const dispatch = useDispatch()
  return (
    <div>
      <input type="text" onChange={(e)=> setUpdateUsername(e.target.value)} />
      <button onClick={()=> dispatch(handleUsername({myName:updateUsername}))}>Change Username</button>
    </div>
  );
}

export default ChangeProfile