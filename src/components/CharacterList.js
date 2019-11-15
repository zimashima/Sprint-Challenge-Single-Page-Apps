import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm"
import {PageTitle, CardList} from "./Header"
import axios from "axios"





export default function CharacterList() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(()=> {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response=> {
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
          );
        setData(characters);
    })

      
  }, [query])

  const handleChange = event => {
    setQuery(event.target.value)
  }

  return (
    <div>
      <PageTitle>Characters</PageTitle>
      <SearchForm handleChange={handleChange}/>
    <CardList>
      
      {
        data.map((each, index)=>(
          <CharacterCard key={index} name={each.name} status={each.status} gender={each.gender} species={each.species} image={each.image} />
        ))
      }
    </CardList>
    </div>
    
  );
}
