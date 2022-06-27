import { useState } from "react";

const Modal = ({handleModal, handleAddItem}) => {
  const [state, setState] = useState({
    product: "",
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
    handleAddItem(state);
    handleModal();
  }

  return (
    <div id="modal-bg" >
      <form id="modal" onSubmit={handleSubmit}>
      <span id="close-btn" onClick={handleModal}>X</span>
      <label htmlFor="name">이름</label>
      <input name="product" value={state.product} onChange={handleInput}></input>
      <input name="image" value={state.image} onChange={handleInput}></input>
      <input name="content" value={state.content} onChange={handleInput}></input>
      <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default Modal;
