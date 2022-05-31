import defaultData from "./db/data.json";
import React, { useEffect, useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Nav from "./components/Nav";
import BoardItem from "./components/BoardItem";

const App = () => {
  
  

  return (
    <div className="App">
      <header>고량주</header>
      <main>
        <Nav></Nav>
        <BoardItem />
      </main>
      <AddItem />
    </div>
  );
};

export default App;
