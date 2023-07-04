import React, { useState } from "react";
import { Container, Meta } from "./styles";
import { renderIconNav } from "../../utils/renderIconNav";
import moment from "moment";
import { Link } from "react-router-dom";

interface ICardData {
  itemId: number;
  photo: string;
  platforms: { platform: { id: number; slug: string } }[];
  metacritic: number;
  name: string;
  release_date: string;
  genres: { id: number; name: string }[];
}

const MainCard: React.FC<ICardData> = ({
  itemId,
  photo,
  platforms,
  metacritic,
  name,
  release_date,
  genres,
}) => {
  const [toogle, setToogle] = useState(false);

  return (
    <Container>
      {photo ? (
        <img src={photo} className="photo" />
      ) : (
        <div className="photo">
          <p style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>
            NO IMAGE :(
          </p>
        </div>
      )}

      <div className="information_container">
        <div className="icon_score">
          <div className="icons">
            {platforms ? (
              platforms.map((e, i) => (
                <span key={i}>{renderIconNav(e.platform.slug)}</span>
              ))
            ) : (
              <span style={{ fontWeight: "bold", color: "#fff" }}>-</span>
            )}
          </div>

          <Meta score={metacritic}>{metacritic}</Meta>
        </div>

        <Link to={"/details"} style={{ textDecoration: "none" }}>
          <h3>{name}</h3>
        </Link>
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
              {genres ? (
                genres.map((e, i) => <p key={i}>{e.name}</p>)
              ) : (
                <p style={{ fontWeight: "bold", color: "#fff" }}>-</p>
              )}
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
