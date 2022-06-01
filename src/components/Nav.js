import React, { useState } from "react";
import Modal from "./Modal";


const Nav = ({itemProductName}) => {
  const [isView, setIsView] = useState(false);

  const view = () => {
    setIsView(true);
    if (isView===true){
      return <Modal style={{display:"block"}} isView={isView}/>
    }
  }
  
    return(
        <nav>
          <button onClick={view}>추가</button>
        <ul>{itemProductName.map((nav) => (
          <li key={nav.id}>{nav.product}</li>
        ))}</ul>
      </nav>
    )
}

export default Nav;