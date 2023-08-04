import React, {useRef} from 'react'

const TheUseRefHook = () => {
  const inputRef = useRef(null)
  const onclick = ()=>{
    //console.log(inputRef.current.value)
    inputRef.current.value = ''
  }
  return (
    <div>
      <h1>GRACE</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={onclick}>Change Name</button>
    </div>
  )
}

export default TheUseRefHook