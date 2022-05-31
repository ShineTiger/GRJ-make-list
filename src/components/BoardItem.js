import React, { useEffect, useState } from "react";

const BoardItem = () => {
  const [itemData, setItemData] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3001/item")
    .then(res => {
      return res.json();
    })
    .then(item => {
      setItemData(item)
    });
  }, []);
  
    return(
        <section className="cards">
          {itemData.map(item => (
            <div className="card" key={item.id}>
              
              <span>{item.content}</span>
            </div>
          ))}
      </section>
    )
}

export default BoardItem