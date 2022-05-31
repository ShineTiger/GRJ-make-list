import { useState } from "react";

const AddItem = () => {
  const [state, setState] = useState({
    productName: "",
    image: "",
    content: "",
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input name="productName" value={state.name} onChange={handleInput}></input>
      <input name="image" value={state.image} onChange={handleInput}></input>
      <input name="content" value={state.content} onChange={handleInput}></input>
      <button>저장</button>
    </div>
  );
};

export default AddItem;
