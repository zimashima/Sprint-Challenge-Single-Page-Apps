import React from "react";
import Header from "./components/Header.js";

//import components & Route

import {Route} from "react-router-dom"
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import LocationList from "./components/LocationsList"


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/Characters" component={CharacterList} />
      <Route path="/Locations" component={LocationList} />
    </main>
  );
}
