import React, {} from "react";

const BoardItem = ({data}) => {
  
  
    return(
        <section className="cards">
          {data.map(i => (
            <div className="card" key={i.id}>             
              <span>{i.content}</span>
            </div>
          ))}
      </section>
    )
}

export default BoardItem