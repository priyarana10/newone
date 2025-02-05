import React from 'react'
import "./Start.css"
const Start = () => {
  const studentcard = [
    {
        images: "student2.webp",
        name: "Nikita",
        age: "18",
        class: "12th",
        description: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
    },
    
];
    
  return (
    <>
    <div className="second-page">
      {studentcard.map((cards,index)=>(
        <div className="main-page" key={index}>
            <div className="left-side">
                <img src={cards.images} alt="" className="photos2" />
            </div>
            <div className="right-side">
            <div className="twice2">
                <div className="style2">
                  <h3 className="name2">Name</h3>
                  <p className="names2">: {cards.name}</p>
                </div>
                <div className="style2">
                  <h3 className="name2">Age</h3>
                  <p className="names2">: {cards.age}</p>
                </div>
                <div className="style2">
                  <h3 className="name2">Class</h3>
                  <p className="names2">: {cards.class}</p>
                </div>
                <div className="style3"> 
                  <h3 className="name3">Description</h3>
                  <p className="names3"> {cards.description} </p>
                </div>
              </div>
            </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Start