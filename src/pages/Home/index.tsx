import React from "react";

import { Container } from "./styles";

import logo from "../../assets/game_controller.svg";

import MainInput from "../../components/MainInput";

import MainCardList from "../../components/MainCardList";

const Home: React.FC = () => {
  return (
    <Container>
      <div className="home_header">
        <img src={logo} />

        <h1>GameLibrary</h1>
      </div>

      <div className="input_container">
        <MainInput />
      </div>

      <div className="list_body">
        <MainCardList />
      </div>
    </Container>
  );
};

export default Home;
