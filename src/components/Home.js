import { useState, useEffect } from "react";
import jsonData from "../data/data";

import "./home.css";
const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <h1>Search</h1>
      <input
        onChange={(event) => setSearch(event.target.value)}
        type="search"
        placeholder="Please search here"
      ></input>
      <div className="book">
        {" "}
        {jsonData
          .filter((item) => {
            if (search === "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
          })
          .map((val, key) => (
            <div className="books" key={key}>
              <img src={val.image} alt="" />
              <br /> <h2> {val.title}</h2>
              <h2> {val.author}</h2>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
