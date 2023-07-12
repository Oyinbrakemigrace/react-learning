import React from 'react'
import PropTypes from 'prop-types'

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

Person.propTypes = {
  Name : PropTypes.string,
  Email : PropTypes.string,
  Age: PropTypes.number,
  Married : PropTypes.bool,
  Friends : PropTypes.arrayOf(PropTypes.string)
}

export default Person