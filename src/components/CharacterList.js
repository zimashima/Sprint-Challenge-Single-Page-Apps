import React, { useEffect, useState } from "react";
import styled from "styled-components"

//import fakedata
import {chardata} from "./tempdata";

//import CharacterCard

import CharacterCard from "./CharacterCard";

import SearchForm from "./SearchForm"



//styling
import {PageTitle} from "./Header"



const CharList = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);

  const [data, setData] = useState([chardata.results]);
  const [query, setQuery] = useState("");

  useEffect(()=> {
    const characters = chardata.results.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(characters);
  }, [query])

  const handleChange = event => {
    setQuery(event.target.value)
  }

  return (
    <div>
      <PageTitle>Characters</PageTitle>
      <SearchForm handleChange={handleChange}/>
    <CharList>
      
      {
        data.map((each, index)=>(
          <CharacterCard key={index} name={each.name} status={each.status} gender={each.gender} species={each.species} image={each.image} />
        ))
      }
    </CharList>
    </div>
    
  );
}
