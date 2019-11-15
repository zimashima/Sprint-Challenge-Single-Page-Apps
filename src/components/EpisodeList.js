import React, { useEffect, useState } from "react";
import styled from "styled-components"

//import fakedata
import {episodedata} from "./tempdata";

//import CharacterCard

import EpisodeCard from "./EpisodeCard";

import SearchForm from "./SearchForm"



//styling
import {PageTitle, CardList} from "./Header"





export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);

  const [data, setData] = useState([episodedata.results]);
  const [query, setQuery] = useState("");

  useEffect(()=> {
    const episodes = episodedata.results.filter(episode =>
      episode.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(episodes);
  }, [query])

  const handleChange = event => {
    setQuery(event.target.value)
  }

  return (
    <div>
      <PageTitle>Episode List</PageTitle>
      <SearchForm handleChange={handleChange}/>
    <CardList>
      
      {
        data.map((each, index)=>(
          <EpisodeCard key={index} name={each.name} air_date={each.air_date} episode={each.episode} />
        ))
      }
    </CardList>
    </div>
    
  );
}
