import React, { useState, useEffect } from "react";
import { Container, DetailsBody, GameDetails } from "./styles";
import { renderIconNav } from "../../utils/renderIconNav";
import Header from "../../components/Header";
import PhotoSwiper from "../../components/PhotoSwiper";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getGameDetails } from "../../services/apiCalls";

interface IDetails {
  parent_platforms: { platform: { id: number; slug: string } }[];
  playtime: number;
  name: string;
  description_raw: string;
  genres: { id: number; name: string }[];
  platforms: { platform: { id: number; name: string; slug: string } }[];
}

const Details: React.FC = () => {
  const platforms = [
    "playstation",
    "pc",
    "nintendo",
    "mac",
    "xbox",
    "android",
    "ios",
    "sega",
    "linux",
    "atari",
  ];

  const [loading, setLoading] = useState(true);

  const [details, setDetails] = useState<IDetails>();

  const { id } = useParams();

  const handleDetails = async () => {
    const game_details = await getGameDetails(id);

    setDetails(game_details);

    setLoading(false);
  };

  useEffect(() => {
    handleDetails();
  }, [id]);

  return (
    <Container>
      <Header />

      <DetailsBody>
        {loading ? (
          <div className="details_loading">
            <LoadingSpinner size={50} color={"#FFF"} />
          </div>
        ) : (
          <div className="details_content">
            <div className="date_icons">
              <div className="date_container">
                <p>oct 9, 2007</p>
              </div>

              <div className="icon_container">
                {details?.parent_platforms.map((p, i) => (
                  <span key={i}>{renderIconNav(p.platform.slug)}</span>
                ))}
              </div>

              <p className="playtime">average playtime: {details?.playtime}h</p>
            </div>

            <h2>{details?.name}</h2>

            <PhotoSwiper />

            <GameDetails>
              <h3>About</h3>

              <p>{details?.description_raw}</p>
            </GameDetails>

            <GameDetails>
              <h3>Genres</h3>

              <ul>
                {details?.genres ? (
                  details?.genres.map((g, i) => <li key={i}>{g.name}</li>)
                ) : (
                  <li>-</li>
                )}
              </ul>
            </GameDetails>

            <GameDetails>
              <h3>Platforms</h3>

              <ul>
                {details?.platforms.map((p, i) => (
                  <li key={i}>{p.platform.name}</li>
                ))}
              </ul>
            </GameDetails>

            <GameDetails>
              <h3>Ratings</h3>

              <p>Total: 50</p>
              <p>Exceptional: 50</p>
              <p>Recommended: 50</p>
              <p>Meh: 50</p>
              <p>Skip: 50</p>
            </GameDetails>
          </div>
        )}
      </DetailsBody>
    </Container>
  );
};

export default Details;
