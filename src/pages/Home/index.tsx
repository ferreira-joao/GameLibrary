import React from "react";

import { Container } from "./styles";

import logo from "../../assets/game_controller.svg";

import MainInput from "../../components/MainInput";

import MainCard from "../../components/MainCard";

const Home: React.FC = () => {
  return (
    <Container>
      <div className="home_header">
        <img src={logo} />

        <h1>GameLibrary</h1>
      </div>

      <div className="home_body">
        <MainInput />

        <MainCard />
      </div>
    </Container>
  );
};

export default Home;
