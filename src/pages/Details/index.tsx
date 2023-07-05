import React, { useState, useEffect } from "react";
import { Container, DetailsBody, GameDetails } from "./styles";
import { renderIconNav } from "../../utils/renderIconNav";
import Header from "../../components/Header";
import PhotoSwiper from "../../components/PhotoSwiper";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getGameDetails } from "../../services/apiCalls";

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

  const [details, setDetails] = useState([]);

  const { id } = useParams();

  const handleDetails = async () => {
    const game_details = await getGameDetails(id);

    setDetails(game_details);

    setLoading(false);
  };

  useEffect(() => {
    handleDetails();
  }, [id]);

  useEffect(() => {
    console.log(details);
  }, [details]);

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
                {platforms.map((e, i) => (
                  <span key={i}>{renderIconNav(e)}</span>
                ))}
              </div>

              <p className="playtime">average playtime: 72 hours</p>
            </div>

            <h2>Grand Theft Auto</h2>

            <PhotoSwiper />

            <GameDetails>
              <h3>About</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores dicta perspiciatis reprehenderit, soluta aut eos
                tenetur sed debitis alias molestias corporis ex est temporibus
                explicabo? Pariatur, neque. Illum, est dolorem?
              </p>
            </GameDetails>

            <GameDetails>
              <h3>Genres</h3>

              <ul>
                <li>Adventure</li>
                <li>Action</li>
                <li>Singleplayer</li>
                <li>Atmospheric</li>
              </ul>
            </GameDetails>

            <GameDetails>
              <h3>Platforms</h3>

              <ul>
                <li>Playstation 5</li>
                <li>Xbox Series S/X</li>
                <li>PC</li>
                <li>Xbox 360</li>
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
