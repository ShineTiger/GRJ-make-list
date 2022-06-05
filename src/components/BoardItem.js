import React, {} from "react";

const BoardItem = ({useFetch}) => {
    const itemInfo = useFetch("http://localhost:3001/item")
  
    return(
        <section className="cards">
          {itemInfo.map(i => (
            <div className="card" key={i.id}>             
              <span>{i.content}</span>
            </div>
          ))}
      </section>
    )
}

export default BoardItem