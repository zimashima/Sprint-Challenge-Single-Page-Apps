import React, { useEffect, useState } from "react";
import {PageTitle, CardList} from "./Header"
import LocationCard from "./LocationCard"
import SearchForm from "./SearchForm"
import {locationdata} from "./tempdata"

export default function LocationsList() {
    
    const [data, setData] = useState([locationdata.results]);
    const [query, setQuery] = useState("");

    useEffect(()=> {
    const locations = locationdata.results.filter(location =>
      location.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(locations);
    }, [query])

    const handleChange = event => {
        setQuery(event.target.value)
    }
    return(
        <div>
        <PageTitle>Location</PageTitle>
        <SearchForm handleChange={handleChange}/>
        <CardList>
            {
                data.map((each, index)=>(
                    <div>
                    <LocationCard key={index} name={each.name} type={each.type} dimension={each.dimension} 
                        residents={each.residents} />
                    </div>
                  ))
            }
        </CardList>
        </div>
    )
}
