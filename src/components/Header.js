import React from "react";

//import Link and styled components

import {Link} from "react-router-dom"
import styled from "styled-components"

const NavDiv = styled.nav`
  font-size: 24px;
  display: flex;
  justify-content: space-around;
`


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Navigation />
    </header>
  );
}

const Navigation = () => {
  const NavTopic = ["Characters", "Locations", "Episodes"]
  return (
    <NavDiv>
        <span><Link exact to="/" className="navLink">Home</Link></span>
      {
        NavTopic.map(topic=> (
          <span><Link to={topic} className="navLink">{topic}</Link></span>
        ))
      }
    </NavDiv>
  );
};

//general styling

export const PageTitle = styled.h2`
  text-align: center;
  font-size: 32px;
`