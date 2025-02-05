import React from 'react'
import "./img.css"
const Img = () => {
    
    const photos=["one.jpg", "two.jpg","three.jpg"]

  return (
    <>
    <div className="onec">
        {photos.map((images)=>(
            <img src={images} alt="" className="onecc" />
        ))}
    </div>
    </>
    
  )
}

export default Img