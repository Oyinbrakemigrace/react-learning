import React, { useState } from 'react'
import Box from './Box'

const GameBoard = () => {
    const [boxValue, setBoxValue] = useState(Array(9).fill(null))
  return (
    <div className='board'>
        <Box value = {boxValue[0]} />
        <Box value = {boxValue[1]} />
        <Box value = {boxValue[2]} />
        <Box value = {boxValue[3]} />
        <Box value = {boxValue[4]} />
        <Box value = {boxValue[5]} />
        <Box value = {boxValue[6]} />
        <Box value = {boxValue[7]} />
        <Box value = {boxValue[8]} />
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