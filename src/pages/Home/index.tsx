import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import logo from "../../assets/game_controller.svg";

import MainInput from "../../components/MainInput";

import MainCardList from "../../components/MainCardList";

import { getGames } from "../../services/apiCalls";

const Home: React.FC = () => {
  const [games, setGames] = useState<[]>([]);

  const handleGet = async () => {
    const games = await getGames();

    setGames(games);
  };

  useEffect(() => {
    handleGet();
  }, []);

  useEffect(() => {
    console.log(games);
  }, [games]);

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
