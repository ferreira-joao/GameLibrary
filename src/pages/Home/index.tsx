import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import logo from "../../assets/game_controller.svg";

import Header from "../../components/Header";

import MainInput from "../../components/MainInput";

import MainCardList from "../../components/MainCardList";

import { getGames } from "../../services/apiCalls";

import LoadingSpinner from "../../components/LoadingSpinner";

const Home: React.FC = () => {
  const [games, setGames] = useState<[]>([]);

  const [loading, setLoading] = useState(true);

  const [text, setText] = useState("");

  const handleGet = async () => {
    const games = await getGames(text);

    setGames(games);

    setLoading(false);
  };

  const handleChange = (e: string) => {
    setText(e);
  };

  useEffect(() => {
    handleGet();
  }, []);

  //api call only with two or zero letters on input
  useEffect(() => {
    if (text.length >= 2 || text.length <= 0) {
      const timer = setTimeout(() => {
        handleGet();
      }, 300); //delay the search to wait for the user stop typing

      return () => clearTimeout(timer);
    }
  }, [text]);

  return (
    <Container>
      <Header />

      {loading ? (
        <div className="home_icon">
          <LoadingSpinner size={50} color={"#FFF"} />
        </div>
      ) : (
        <>
          <div className="input_container">
            <MainInput value={text} change={(e) => handleChange(e)} />
          </div>

          {games.length === 0 ? (
            <h3 className="zero_games">NO GAMES FOUND :(</h3>
          ) : (
            <div className="list_body">
              <MainCardList data={games} />
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
