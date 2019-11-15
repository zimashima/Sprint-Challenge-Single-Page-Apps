import React from "react";


import {PageTitle} from "./Header"

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <PageTitle>Welcome to the ultimate fan site!</PageTitle>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
