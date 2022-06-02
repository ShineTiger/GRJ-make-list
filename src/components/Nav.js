import React, { useState } from "react";
import Modal from "./Modal";


const Nav = ({itemProductName,onCreate}) => {
  const [isView, setIsView] = useState(false);

  const view = () => {
    setIsView(true);
  }

  const handleBtnModal = () => {
    setIsView(false)
  }
  
  //and연산자의 첫번째 피연산자가 truthy면 두번째 피연산자를 반환한다!
    return(
        <nav>
          <button onClick={view}>추가</button>
          {isView && <Modal handleBtnModal={handleBtnModal} onCreate={onCreate}/>} 
        <ul>{itemProductName.map((nav) => (
          <li key={nav.id}>{nav.product}</li>
        ))}</ul>
      </nav>
    )
}

export default Nav;