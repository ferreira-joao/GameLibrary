import React from "react";

import { Container } from "./styles";

import { renderIconNav } from "../../utils/renderIconNav";

const MainCard: React.FC = () => {
  const consoles = ["playstation", "xbox", "pc"];
  return (
    <Container>
      <div className="photo"></div>

      <div className="information_container">
        <div className="icon_score">
          <div className="icons">{consoles.map((e) => renderIconNav(e))}</div>

          <span>90</span>
        </div>

        <h3>Título do jogo</h3>
      </div>
    </Container>
  );
};

export default MainCard;
