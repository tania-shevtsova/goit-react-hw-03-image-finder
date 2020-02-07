import React from "react";
import ImageGalleryItem from "../image-gallery-item/ImageGalleryItem";
import css from "../App.module.css";
import shortid from "shortid";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(el => (
        <ImageGalleryItem
          onClick={onClick}
          key={shortid()}
          url={el.webformatURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
