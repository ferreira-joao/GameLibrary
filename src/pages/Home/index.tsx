import React from "react";

import { Container } from "./styles";

import logo from "../../assets/game_controller.svg";

const Home: React.FC = () => {
  return (
    <Container>
      <div className="home_header">
        <img src={logo} />

        <h1>GameLibrary</h1>
      </div>
    </Container>
  );
};

export default Home;
