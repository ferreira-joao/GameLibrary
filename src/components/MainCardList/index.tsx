import React from "react";

import MainCard from "../MainCard";

import { List } from "./styles";

import { games } from "./data";

const MainCardList: React.FC = () => {
  return (
    <List>
      {games.map((e, i) => (
        <MainCard
          key={i}
          platforms={e.platforms}
          metacritic={e.metacritic}
          name={e.name}
          release_date={e.release_date}
          genres={e.genres}
        />
      ))}
    </List>
  );
};

export default MainCardList;
