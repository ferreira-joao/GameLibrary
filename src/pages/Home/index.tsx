import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import logo from "../../assets/game_controller.svg";

import MainInput from "../../components/MainInput";

import MainCardList from "../../components/MainCardList";

import { getGames } from "../../services/apiCalls";

import LoadingSpinner from "../../components/LoadingSpinner";

const Home: React.FC = () => {
  const [games, setGames] = useState<[]>([]);
  const [loading, setLoading] = useState(true);

  const handleGet = async () => {
    const games = await getGames();

    setGames(games);

    setLoading(false);
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <Container>
      <div className="home_header">
        <img src={logo} />

        <h1>GameLibrary</h1>
      </div>

      {loading ? (
        <div className="home_icon">
          <LoadingSpinner size={50} color={"#FFF"} />
        </div>
      ) : (
        <>
          <div className="input_container">
            <MainInput />
          </div>

          <div className="list_body">
            <MainCardList data={games} />
          </div>
        </>
      )}
    </Container>
  );
};

export default Home;
