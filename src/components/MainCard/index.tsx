import React, { useEffect, useState } from "react";

import { Container, Meta } from "./styles";

import { renderIconNav } from "../../utils/renderIconNav";

import moment from "moment";

interface ICardData {
  platforms: string[];
  metacritic: number;
  name: string;
  release_date: string;
  genres: { id: number; name: string }[];
}

const MainCard: React.FC<ICardData> = ({
  platforms,
  metacritic,
  name,
  release_date,
  genres,
}) => {
  const [toogle, setToogle] = useState(false);

  return (
    <Container>
      <div className="photo"></div>

      <div className="information_container">
        <div className="icon_score">
          <div className="icons">{platforms.map((e) => renderIconNav(e))}</div>

          <Meta score={metacritic}>{metacritic}</Meta>
        </div>

        <h3>{name}</h3>
      </div>

      {toogle && (
        <div className="date_genres">
          <div className="release_date">
            <p>Relase date:</p>

            <p>{moment(release_date).format("MMM DD" + ", " + "YYYY")}</p>
          </div>

          <div className="genres">
            <p>Genres:</p>

            <div className="genre_container">
              {genres.map((e) => (
                <p key={e.id}>{e.name}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="expand_button">
        <div onClick={() => setToogle(!toogle)}>
          {toogle ? <p>View less</p> : <p>View more</p>}
        </div>
      </div>
    </Container>
  );
};

export default MainCard;
