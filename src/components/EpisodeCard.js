import React, {useState} from "react";

import styled from "styled-components"

const StyledCard2 = styled.span`
  width: 800px;
  background-color: aqua;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0 20px 0;
  box-shadow: 0px 5px 5px gold;
  display:flex;
  flex-direction: column;
  text-align: center;
  &:hover{
    transform: scale(1.1);
    transition: 0.2s;
  }
`

export default function LocationCard({ name, air_date, episode}) {
  return (

    <StyledCard2>
      <h3>{name}</h3>
      <p>Air Date: {air_date}</p>
      <p>Episode: {episode}</p>
    </StyledCard2>
  )
}
