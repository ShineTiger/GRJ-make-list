import { useEffect, useState } from "react";

const Modal = ({handleBtnModal, useFetch}) => {
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

  

  //onCreate(state.productName,state.image,state.content)

  return (
    <div id="modal-bg" >
      <form id="modal">
      <span id="close-btn" onClick={handleBtnModal}>X</span>
      <label for="name">이름</label>
      <input name="productName" value={state.productName} onChange={handleInput}></input>
      <input name="image" value={state.image} onChange={handleInput}></input>
      <input name="content" value={state.content} onChange={handleInput}></input>
      <button onClick>저장</button>
      </form>
    </div>
  );
};

export default Modal;