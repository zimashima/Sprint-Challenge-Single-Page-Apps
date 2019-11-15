import React, { useState, useEffect } from "react";
import styled from "styled-components"
import {chardata} from "./tempdata"

const SearchBar = styled.input`
  font-size: 20px;
  padding: 10px;
  width: 500px;
  border-radius: 20px;
  border: 1 px lightgray;
`

const SearchMainForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  margin: 0 auto;
  width: 800px;
  padding: 20px;
  border-radius: 20px;
`

const TheLabel = styled.label`
  font-size: 28px;
`



export default function SearchForm(props) {

  return (
    <section className="search-form">
     <SearchMainForm>
       <TheLabel>Search By Name</TheLabel>
       <SearchBar type="text" name="searchbar" onChange={props.handleChange} />
     </SearchMainForm>
    </section>
  );
}
