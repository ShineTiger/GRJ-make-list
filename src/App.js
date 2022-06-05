import React, { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import BoardItem from "./components/BoardItem";

const App = () => {
  const [itemData, setItemData] = useState([]);

  const useFetch = (url) => {
    useEffect(()=> {
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(item => {
      setItemData(item)
    });
  }, [url]);
};

  useFetch("http://localhost:3001/item");

  // const onCreate = (product, image, content) => {
  //   const newItem = {
  //     product,
  //     image,
  //     content
  //   };
  //   setItemData([newItem, ...itemData])
  // }

  

  return (
    <div className="App">
      <header>고량주</header>
      <main>
        <Nav itemProductName={itemData} useFetch={useFetch}></Nav>
        <BoardItem itemInfo={itemData} />
      </main>
    </div>
  );
};

export default App;