import React from "react";
import css from "../App.module.css";

const ImageGalleryItem = ({ url, onClick }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={url}
        alt=""
        className={css.ImageGalleryItemImage}
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
