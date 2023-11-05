import React from 'react'

const User = (props) => {
    const isGreen = false
    
  return (
    <div>
       <h3 style={{color:  isGreen ? "green" : "red"}}>This is color</h3>
      <h3> {props.name} </h3>
      <h3> {props.age} </h3>
      <h3> {props.email} </h3>
      {isGreen && <button>Welcome!</button>}
    </div>
  )
}

export default User
