import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../features/theme'

function ChangeColor() {
    const [color, setColor] = useState('')
    const dispatch = useDispatch()
  return (
    <div>
        <input type="text" onChange={(e)=> setColor(e.target.value)}/>
        <button onClick={()=> dispatch(changeTheme(color))}>Change color</button>
    </div>
  )
}

export default ChangeColor