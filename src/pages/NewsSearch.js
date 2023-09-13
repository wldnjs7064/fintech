import React, { useState } from "react";
import HeaderComponent from "../components/newsSearch/headerComponent";
import SearchComponent from "../components/newsSearch/searchComponent";
import LinkComponent from "../components/newsSearch/linkComponent";
import axios from "axios";

const NewsSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [newsList, setNewsList] = useState([]);
  const handleClick = () => {
    const apiKey = "";
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchInput}&from=2023-08-13&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => {
        console.log(response);
        setNewsList(response.data.articles);
      });
  };

  const handleChange = ({ target }) => {
    // console.log(e.target.value);
    const { value } = target;
    console.log(value);
    setSearchInput(value);
  };

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <SearchComponent
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchComponent>
      <LinkComponent newsList={newsList}></LinkComponent>
    </div>
  );
};

export default NewsSearch;
