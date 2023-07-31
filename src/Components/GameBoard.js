import React, { useState } from 'react'
import Box from './Box'

const GameBoard = () => {
    const [boxValue, setBoxValue] = useState(Array(9).fill(null))

    const handleClick = (i)=>{
        const eachBoxClick = boxValue.slice()
        eachBoxClick[i] = 'X'
        setBoxValue(eachBoxClick)
    }


  return (
    <div className='board'>
        <Box value = {boxValue[0]} handleBoxClick={()=> handleClick(0)} />
        <Box value = {boxValue[1]} handleBoxClick={()=> handleClick(1)} />
        <Box value = {boxValue[2]} handleBoxClick={()=> handleClick(2)} />
        <Box value = {boxValue[3]} handleBoxClick={()=> handleClick(3)} />
        <Box value = {boxValue[4]} handleBoxClick={()=> handleClick(4)} />
        <Box value = {boxValue[5]} handleBoxClick={()=> handleClick(5)} />
        <Box value = {boxValue[6]} handleBoxClick={()=> handleClick(6)} />
        <Box value = {boxValue[7]} handleBoxClick={()=> handleClick(7)} />
        <Box value = {boxValue[8]} handleBoxClick={()=> handleClick(8)} />
    </div>
  )
}

export default GameBoard

/*
  Array(9) creates a new array with a length of 9. 
  This means the array will have 9 elements, initially filled with empty values.
  
.fill(null) fills each element in the array with the value null. 
This ensures that all the squares in the tic-tac-toe board start as empty (null) values.
  */