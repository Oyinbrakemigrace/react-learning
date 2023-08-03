import React, { useEffect, useState } from 'react'
import axios from 'axios'

//The useEffect hook works whenever the page re-renders. It is primarily used
//to make API calls when the page loads.
const TheUseEffectHook = () => {

  const[data, setData]= useState('')
  const[count, setCount] = useState(0)

  const handleClick = ()=>{
    setCount(count+1)
  }

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
      setData(res.data[0].email)
      console.log('API Called')
    })
  },[count])

  //if you want the useEffect function to be triggered everytime you
  //click the button, you put the count variable inside the dependency array.
  //normally, with the dependency array, it makes the useEffect function run just once.
  //if it's not there, the useEffect function will be triggered for every state change.

  return (
    <div>
      Info: {data}
      <div>
        <h1>{count}</h1>
        <div>
          <button onClick={handleClick}>click</button>
        </div>
      </div>
    </div>
  );
}

export default TheUseEffectHook