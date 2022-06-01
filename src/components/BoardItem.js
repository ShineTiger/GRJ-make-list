import React, {} from "react";

const BoardItem = ({itemInfo}) => {
  
  
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