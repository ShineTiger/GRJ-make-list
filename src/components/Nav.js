import React, { useState, onCreate } from "react";
import Modal from "./Modal";


const Nav = ({data}) => {
  const [isView, setIsView] = useState(false);

  const handleModal = (value) => {
    setIsView(value)
  }
  
  //and연산자의 첫번째 피연산자가 truthy면 두번째 피연산자를 반환한다!
    return(
        <nav>
          <button onClick={()=>handleModal(true)}>추가</button>
          {isView && <Modal handleBtnModal={()=>handleModal(false)} onCreate={onCreate} />} 
        <ul>{data.map((nav) => (
          <li key={nav.id}>{nav.product}</li>
        ))}</ul>
      </nav>
    )
}

export default Nav;