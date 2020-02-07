import React, { Component } from "react";
import css from "../App.module.css";

const Searchbar = ({ onChange, onSubmit, value }) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={onChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
