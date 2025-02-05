import React from 'react'
import "./card.css"
const Card = () => {
  const causes = [

    {
      images: "one.jpg",
      head: "Card One",
      paragraph: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito",
      headtext: "Priya",
      headtexxt: "Rana"
    },
    {
      images: "two.jpg",
      head: "Card Two",
      paragraph: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito",
      headtext: "Riya",
      headtexxt: "Rana"
    },
    {
      images: "three.jpg",
      head: "Card Three",
      paragraph: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito",
      headtext: "Priti",
      headtexxt: "Rana"
    },
    {
      images: "four.jpg",
      head: "Card Four",
      paragraph: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito",
      headtext: "Riya",
      headtexxt: "Rana"
    },
    {
      images: "five.jpg",
      head: "Card Five",
      paragraph: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito",
      headtext: "Priti",
      headtexxt: "Rana"
    }
   
  ]
  return (
    <>
      <main>
        <div className="container">
          <div className="cause">
            {causes.map((index) => (
              <div className="start">
                <img src={index.images} alt="" className="photo" />
                <h1 className="head">{index.head}</h1>
                <p className="lines">{index.paragraph}</p>
                <div className="flex">
                  <h3 className="text1">{index.headtext}</h3>
                  <h3 className="text1">{index.headtexxt}</h3>
                </div>

              </div>
            ))}

          </div>
        </div>
      </main>
    </>
  )
}

export default Card