import React, { useState } from "react";
import Modal from "./Modal";


const Nav = ({data, handleAddItem}) => {
  const [isView, setIsView] = useState(false);

  const handleModal = (value) => {
    setIsView(value)
  };
  
  //and연산자의 첫번째 피연산자가 truthy면 두번째 피연산자를 반환한다!
    return(
        <nav>
          <button onClick={()=>handleModal(true)}>추가</button>
          {isView && <Modal handleModal={()=>handleModal(false)} handleAddItem={handleAddItem} />} 
        <ul>{data.map((li) => (
          <li key={li.product}>
            {li.product}
          </li>
        ))}</ul>
      </nav>
    )
}

export default Nav;