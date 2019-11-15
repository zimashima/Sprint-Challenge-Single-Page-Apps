import React from "react";
import styled from "styled-components"

const StyledCard = styled.span`
  width: 400px;
  background-color: aqua;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0 20px 0;
  box-shadow: 0px 5px 5px gold;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  &:hover{
    transform: scale(1.1);
    transition: 0.2s;
  }
`

const ImageCircle = styled.span`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`

const HeadShot = styled.img`
  width: 100%;
`

export default function CharacterCard(props) {
  return (
  <StyledCard> 
    <span>
      <h3>{props.name}</h3>
      <p>Status : {props.status}</p>
      <p>Species : {props.species}</p>
      <p>Gender : {props.gender}</p>
    </span>
    <ImageCircle>
      <HeadShot src={props.image} />
    </ImageCircle>
  </StyledCard>
  )
}
