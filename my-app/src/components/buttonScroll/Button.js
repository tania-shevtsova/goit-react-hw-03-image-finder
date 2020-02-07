import React from "react";
import css from "../App.module.css";

const Button = ({ onClick }) => {
  return (
    <button className={css.Button} type="button" onClick={onClick}>
      Load More
    </button>
  );
};

export default Button;
