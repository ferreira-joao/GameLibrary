import React, { useEffect, useState } from "react";

import { Container, Meta } from "./styles";

import { renderIconNav } from "../../utils/renderIconNav";

interface ICardData {
  platforms: string[];
  metacritic: number;
  name: string;
  release_date: string;
  genres: string[];
}

const MainCard: React.FC<ICardData> = ({
  platforms,
  metacritic,
  name,
  release_date,
  genres,
}) => {
  const [toogle, setToogle] = useState(false);

  const [fullDate, setFullDate] = useState("");

  useEffect(() => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let d = new Date(release_date.replace(/-/g, "/"));

    let dd = d.getDate();
    let mm = month[d.getMonth()]; //getMonth() returns 0 to 11
    let yyyy = d.getFullYear();

    setFullDate(mm + " " + dd + ", " + yyyy);
  }, []);

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

            <p>{fullDate}</p>
          </div>

          <div className="genres">
            <p>Genres:</p>

            <p>Action, RPG</p>
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
