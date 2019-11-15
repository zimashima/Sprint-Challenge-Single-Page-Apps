import React, { useState, useEffect } from "react";
import styled from "styled-components"
import {chardata} from "./tempdata"

const SearchBar = styled.input`
  font-size: 18;x
  padding: 5px;
`



export default function SearchForm(props) {

  return (
    <section className="search-form">
     <form>
       <SearchBar type="text" name="searchbar" onChange={props.handleChange} />
     </form>
    </section>
  );
}
