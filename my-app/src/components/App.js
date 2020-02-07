import React, { Component, createRef } from "react";
import axios from "axios";
import ImageGallery from "./image-gallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import css from "./App.module.css";
// import * as Images from "./images-api/ImagesApi";
import Button from "./buttonScroll/Button";
import Loader from "./loader/Loader";
import Modal from "./modal/Modal";
import shortid from "shortid";
import PNotify from "pnotify/dist/es/PNotify";
import PNotifyBrightTheme from '../../node_modules/pnotify/dist/PNotifyBrightTheme.css';

// const BASE_URL = `https://pixabay.com/api/?q={value}&page=1&key=15160728-4da4dca327a38e5f428939f00&image_type=photo&orientation=horizontal&per_page=12`;

class App extends Component {
  state = {
    images: [],
    value: "",
    error: null,
    initialValuePage: 1,
    isLoaded: false,
    isOpen: false,
    largeImg: ""
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModalByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModalByEscape);
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });

    if (e.target.value === "") {
      PNotify.removeAll()
      this.setState({
        images: [],
        isLoaded: false
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isLoaded: true
    });
    const BASE_URL = `https://pixabay.com/api/?q=${this.state.value}&page=1&key=15160728-4da4dca327a38e5f428939f00&image_type=photo&orientation=horizontal&per_page=12`;
    axios
      .get(BASE_URL)
      .then(data => {
        if (data.data.hits.length !== 0) {
          this.setState({
            images: data.data.hits,
            initialValuePage: 1,
            isLoaded: false
          });
        } else {
          this.setState({
            isLoaded: false,
            images: [],
          });
          PNotify.error({
            text: "Nothing is found!"
          });
        }
      })
      .catch(this.state.error);
  };

  handleClick = e => {
    e.preventDefault();

    const BASE_URL = `https://pixabay.com/api/?q=${this.state.value}&page=${this
      .state.initialValuePage +
      1}&key=15160728-4da4dca327a38e5f428939f00&image_type=photo&orientation=horizontal&per_page=12`;
    axios
      .get(BASE_URL)
      .then(data => {
        this.setState(prev => {
          return {
            images: [...prev.images, ...data.data.hits],
            initialValuePage: prev.initialValuePage + 1,
            isLoaded: false
          };
        });
      })
      .catch(this.state.error)
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      });
  };

  handleClickOnItem = e => {
    const curlargeI = e.target.src;
    this.setState({
      isOpen: true,
      largeImg: curlargeI
    });
  };
  handleCloseModal = e => {
    this.setState({
      isOpen: false
    });
  };

  handleCloseModalByEscape = e => {
    if (e.code !== "Escape") {
      return;
    }
    this.handleCloseModal();
  };

  handleByClickOverlay = e => {
    if (e.currentTarget !== e.target) {
      return;
    }
    this.handleCloseModal();
  };

  render() {
    const { images, isLoaded, isOpen, largeImg } = this.state;
    return (
      <div>
        <Searchbar
          onSubmit={this.handleSubmit}
          value={this.state.value}
          onChange={this.handleChange}
        />
        {isLoaded && <Loader />}
        <ImageGallery images={images} onClick={this.handleClickOnItem} />
        {images.length >= 12 && <Button onClick={this.handleClick} />}
        {isOpen && (
          <Modal
            onClose={this.handleCloseModal}
            handleCloseModalByEscape={this.handleCloseModalByEscape}
            handleByClickOverlay={this.handleByClickOverlay}
            images={images}
            largeImg={largeImg}
          ></Modal>
        )}
      </div>
    );
  }
}

export default App;
