import React from "react";

import { Container, Header } from "./styles";

import logo from "../../assets/game_controller.svg";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logo} />

        <h1>GameLibrary</h1>
      </Header>
    </Container>
  );
};

export default Home;
