import React, { useEffect, useState } from 'react'
import axios from 'axios'

//The useEffect hook works whenever the page re-renders
const TheUseEffectHook = () => {

  const[data, setData]= useState('')

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
      setData(res.data[0].email)
      console.log('API Called')
    })
  }, [])

  return (
    <div>Info: {data}</div>
  )
}

export default TheUseEffectHook