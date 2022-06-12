import React, { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import BoardItem from "./components/BoardItem";

const App = () => {
  const data = [
    { "id": 1, "product": "소주", "image": "유알엘어쩌구", "content":"소주시러" },
    { "id": 2, "product": "맥주", "image": "유알엘어쩌구", "content":"맥주조아" },
    { "id": 3, "product": "샴페인", "image": "유알엘어쩌구", "content":"샴페인몰라" }
  ];

  const [itemData, setItemData] = useState(data);


  

  const handleAddItem = (item) => {
    setItemData([...itemData, item])
  }

  

  return (
    <div className="App">
      <header>고량주</header>
      <main>
        <Nav itemProductName={itemData} onCreate={handleAddItem}></Nav>
        <BoardItem itemInfo={itemData} />
      </main>
    </div>
  );
};

export default App;
