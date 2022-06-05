import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import BoardItem from "./components/BoardItem";

const App = () => {
  const [itemData, setItemData] = useState([]);

  const useFetch = (url) => {
    useEffect(()=> {
      fetch("http://localhost:3001/item")
      .then(res => {
        return res.json();
      })
      .then(item => {
        setItemData(item)
      });
    }, []);
    return itemData
  }

  const onCreate = (product, image, content) => {
    
    const newItem = {
      product,
      image,
      content
    };
    setItemData([newItem, ...itemData])
  }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  // }

  

  return (
    <div className="App">
      <header>고량주</header>
      <main>
        <Nav itemProductName={itemData} onCreate={onCreate}></Nav>
        <BoardItem  useFetch={useFetch} />
      </main>
    </div>
  );
};

export default App;
