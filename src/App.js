import React, { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import BoardItem from "./components/BoardItem";

const App = () => {
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
  
  const onCreate = (product, image, content) => {
    const newItem = {
      product,
      image,
      content
    };
    setItemData([newItem, ...itemData])
  }
  

  return (
    <div className="App">
      <header>고량주</header>
      <main>
        <Nav itemProductName={itemData}></Nav>
        <BoardItem itemInfo={itemData} />
      </main>
    </div>
  );
};

export default App;
