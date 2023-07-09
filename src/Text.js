import React, { useEffect } from 'react'
import { useState } from 'react'

function Text() {

    const [text, setText]=useState('')

    useEffect(() => {
      console.log("component mounted");

      return ()=>{
        console.log('component unmounted')
      }
    }, []);


    const handleChange = (e)=>{
        setText(e.target.value)
    }

  return (
    <div>
        <input type="text" onChange={handleChange} />
        <p> {text} </p>
    </div>
  )
}

export default Text