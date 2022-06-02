import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import BoardItem from "./components/BoardItem";
import useFetch from "./hooks/useFetch";

const App = () => {
  const what = useFetch("http://localhost:3001/item")

  
  
  const onCreate = (product, image, content) => {
    const newItem = {
      product,
      image,
      content
    };
    setItemData([newItem, ...itemData])
    fetch()
  }

  

  return (
    <div className="App">
      <header>고량주</header>
      <main>
        <Nav itemProductName={itemData} onCreate={onCreate}></Nav>
        <BoardItem itemInfo={itemData} />
      </main>
    </div>
  );
};

export default App;
