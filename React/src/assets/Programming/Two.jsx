import React from 'react'
import "./Two.css"
const Two = () => {

     const copy=["priya","riya","preeti","shikha"]

  return (
    <>
    <div className="main">
        {copy.map((name)=>(
            <div className="Two">{name}</div>
        ))}

    </div>
    </>
  )
}

export default Two