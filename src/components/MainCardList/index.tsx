import React from "react";
import MainCard from "../MainCard";
import { List } from "./styles";

interface IData {
  data: {
    background_image: string;
    parent_platforms: { platform: { id: number; slug: string } }[];
    metacritic: number;
    name: string;
    released: string;
    genres: { id: number; name: string }[];
  }[];
}

const MainCardList: React.FC<IData> = ({ data }) => {
  return (
    <List>
      {data.map((e, i) => (
        <MainCard
          key={i}
          itemId={i}
          photo={e.background_image}
          platforms={e.parent_platforms}
          metacritic={e.metacritic}
          name={e.name}
          release_date={e.released}
          genres={e.genres}
        />
      ))}
    </List>
  );
};

export default MainCardList;
