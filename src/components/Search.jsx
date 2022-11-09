import React from "react";

// styles
import styles from "./Search.module.css";

import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {

const [ search , setSearch ] = useState("")
const navigate = useNavigate()


function handleSubmit(e){
  e.preventDefault();
  if(!search) return alert(" Informe um valor válido ")

  navigate(`/search?q=${search}`)
  setSearch("");
}

  return (
    <>
      <div className={styles.searchInput}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.iptn}
            type="search"
            value={search}
            placeholder="informe um filme"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit"> <BsSearch className={styles.icon} /> </button>
        </form>
      </div>
    </>
  );
};
