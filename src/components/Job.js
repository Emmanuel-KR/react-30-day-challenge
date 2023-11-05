import React from 'react'

const Job = (props) => {
    const age = 26
      
  
  return (
    <div>
        
      <h4>{props.company}</h4>
      <h4>{props.position}</h4>
      <h4>{props.salary}</h4>
      {age >= 18 ? <h4>Adult</h4> : <h4>Minor</h4>}
    </div>
  )
}

export default Job
