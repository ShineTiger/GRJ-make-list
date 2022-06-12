import { useState } from "react";

const Modal = ({ handleBtnModal, handleAddItem }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이부분 수정 필요
    handleAddItem(state.productName, state.image, state.content );
    handleBtnModal()
  }

  //onCreate(state.productName,state.image,state.content)

  return (
    <div id="modal-bg" >
      <form id="modal" onSubmit={handleSubmit}>
      <span id="close-btn" onClick={handleBtnModal}>X</span>
      <label htmlFor="name">이름</label>
      <input name="productName" value={state.productName} onChange={handleInput}></input>
      <input name="image" value={state.image} onChange={handleInput}></input>
      <input name="content" value={state.content} onChange={handleInput}></input>
      <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default Modal;
