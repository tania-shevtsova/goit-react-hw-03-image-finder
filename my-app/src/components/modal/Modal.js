import React, { Children } from "react";
import css from "../App.module.css";
import shortid from "shortid";

const Modal = ({
  onClose,
  images,
  handleCloseModalByEscape,
  handleByClickOverlay,
  largeImg
}) => {
  return (
    <div
      className={css.Overlay}
      onClick={onClose}
      onKeyDown={handleCloseModalByEscape}
      onClick={handleByClickOverlay}
    >
      <div className={css.Modal}>
        <img src={largeImg} alt="" />
      </div>
    </div>
  );
};

export default Modal;
