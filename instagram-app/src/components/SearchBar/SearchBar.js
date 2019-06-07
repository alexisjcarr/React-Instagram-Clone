import React from "react";
import "./SearchBar.scss";
import logo from "../Login/logo.png";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faHeart,
  faUser
} from "@fortawesome/free-regular-svg-icons";

const SearchForm = styled.form`
  position: fixed;
  top: 0;
  background-color: white;
  // padding-bottom: 10px;
  // margin-bottom: 500px;
  opacity: 1;
  display: flex;
  align-items: center;
  font-size: 20px;
`
const Logo = styled.img`
  padding: 0;
  height: 30px;
  width: auto;
`

const SearchBar = props => {
  return (
    <SearchForm className="searchBar">
      <div className="div">
        <label for="search">
          <Logo src={logo} alt="" />
        </label>
      </div>

      <div className="div">
        <input
          onKeyDown={props.searchPosts}
          className="searchbar"
          type="text"
          placeholder= "&#128269; Search"
        />
      </div>

      <div>
        <span>
          <FontAwesomeIcon icon={faCompass} />
          &nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faHeart} />
          &nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
    </SearchForm>
  );
};

export default SearchBar;
