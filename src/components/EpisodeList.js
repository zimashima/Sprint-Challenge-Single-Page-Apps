import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import SearchForm from "./SearchForm"
import {PageTitle, CardList} from "./Header"
import axios from "axios"





export default function EpisodeList() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(()=> {
        axios.get("https://rickandmortyapi.com/api/episode/")
        .then(response => {
            const episodes = response.data.results.filter(episode =>
                episode.name.toLowerCase().includes(query.toLowerCase())
                );
            setData(episodes);
        })
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
