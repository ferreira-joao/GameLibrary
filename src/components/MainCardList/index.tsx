import React from "react";

import MainCard from "../MainCard";

import { List } from "./styles";

import { games } from "./data";

const MainCardList: React.FC = () => {
  return (
    <List>
      {games.map((e) => (
        <MainCard
          key={e.id}
          platforms={e.platforms}
          metacritic={e.metacritic}
          name={e.name}
          release_date={e.release_date}
        />
      ))}
    </List>
  );
};

export default MainCardList;
