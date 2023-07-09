import React from 'react'

function Person(props) {
  return (
    <div>
      <h3>Name : {props.name}</h3>
      <h3>Email: {props.email}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Married: {props.isMarried ? 'Yes' : 'No'}</h3>
      <h3> Friends: {props.friends.map((friend)=>{
        return <p> {friend} </p>;
      })} </h3>
    </div>
  );
}

export default Person