import React, { useState } from 'react';
import "./List.css";

const List = () => {
    const studentcard = [
        {
            images: "student2.webp",
            name: "Nikita",
            age: "18",
            class: "12th",
            description: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
        },
        {
            images: "student1.jpg",
            name: "Nitya",
            age: "17",
            class: "12th",
            description: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
        },
        {
            images: "student4.webp",
            name: "Nisha",
            age: "18",
            class: "12th",
            description: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
        },
        {
            images: "one.jpg",
            name: "Nisha",
            age: "18",
            class: "12th",
            description: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
        },
    ];
    const [hover, sethover] = useState(null);
    function handleClick(){
       window.Location.href="./assets/Start/start"
    }
    

return (
    <>
        <main>
            <div className="add">
                {studentcard.map((cards, index) => (
                    <div  
                    className="oncee"
                    key={index}
                    onClick={handleClick()}
                    onMouseEnter={()=>sethover(index)}
                    onMouseLeave={()=>sethover(null)}
                    style={{ transform: hover===index? "scale(1.1)": "scale(1)",
                             transition: "transform 0.3s ease",
                             cursor:"pointer"
                    }}
                    >
                        <img src={cards.images} alt={cards.name} className="photos" />
                        <div className="twice">
                            <div className="style">
                                <h3 className="name">Name</h3>
                                <p className="names">: {cards.name}</p>
                            </div>
                            <div className="style">
                                <h3 className="name">Age</h3>
                                <p className="names">: {cards.age}</p>
                            </div>
                            <div className="style">
                                <h3 className="name">Class</h3>
                                <p className="names">: {cards.class}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    </>
);
}

export default List;