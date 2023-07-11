import React, { useState, useEffect } from "react";
import { Container, MainButton } from "./styles";
import Header from "../../components/Header";
import MainInput from "../../components/MainInput";
import MainCardList from "../../components/MainCardList";
import { getGames } from "../../services/apiCalls";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useSearchContext } from "../../context/searchText";

const Home: React.FC = () => {
  const [games, setGames] = useState<[]>([]);

  const [loading, setLoading] = useState(true);

  const [loadingButton, setLoadingButton] = useState(false);

  const [text, setText] = useState("");

  const [size, setSize] = useState(20);

  const handleGet = async () => {
    setLoadingButton(true);

    const games = await getGames(text, size);

    setGames(games);

    setLoadingButton(false);
    setLoading(false);
  };

  const handleGetMore = () => {
    setSize(size + 5);
  };

  const handleChange = (e: string) => {
    setText(e);
  };

  const { searchText, setSearchText } = useSearchContext();

  useEffect(() => {
    handleGet();
  }, [size]);

  useEffect(() => {
    if (text.length >= 1 || text.length === 0) {
      setSize(20);

      const timer = setTimeout(() => {
        handleGet();
      }, 200); //delay the search to wait for the user stop typing

      return () => clearTimeout(timer);
    }
  }, [text]);

  useEffect(() => {
    console.log(searchText);
  }, []);

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

              {loadingButton ? (
                <MainButton>
                  <LoadingSpinner size={16} color={"#FFF"} />
                </MainButton>
              ) : (
                <MainButton onClick={handleGetMore}>View more</MainButton>
              )}
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
