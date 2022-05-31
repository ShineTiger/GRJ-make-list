import React, { useEffect, useState } from "react";

const Nav = () => {
  const [navData, setNavData] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3001/list")
    .then(res => {
      return res.json();
    })
    .then(item => {
      setNavData(item)
    });
  }, []);


    return(
        <nav>
          <button>추가</button>
        <ul>{navData.map((nav) => (
          <li key={nav.id}>{nav.product}</li>
        ))}</ul>
      </nav>
    )
}

export default Nav;