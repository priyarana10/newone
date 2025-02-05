import React from 'react'
import "./One.css"
const One = () => {
    const buttonArray=["one","two"]
    // const objectArray = [
    //     {
    //         id:"1",
    //         name:"priya",
    //         age:"20"
    //     },
    //     {
    //         id:"2",
    //         name:"preeti",
    //         age:"20"
    //     },
    //     {
    //         id:"3",
    //         name:"shikha",
    //         age:"20"
    //     },

    // ];
    
  return (
    <>
    <div className="oneee">
    {buttonArray.map((name) => (
        // <div onClick={() => {alert(name.id)}} className="copy">{name.name} / {name.age}</div>
        <div className="copy">{name}</div>
      ))}
      </div>
    </>
  )
}

export default One