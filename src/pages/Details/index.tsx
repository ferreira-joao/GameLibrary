import React from "react";

import { Container, DetailsBody } from "./styles";

import logo from "../../assets/game_controller.svg";

import { renderIconNav } from "../../utils/renderIconNav";

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

  return (
    <Container>
      <div className="details_header">
        <img src={logo} />

        <h1>GameLibrary</h1>
      </div>

      <DetailsBody>
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

          <h1>Grand Theft Auto</h1>
        </div>
      </DetailsBody>
    </Container>
  );
};

export default Details;
