import React from 'react'

const Box = ({value, handleBoxClick}) => {
  return (
    <button className="box" onClick={handleBoxClick}>
      {value}
    </button>
  );
}

export default Box