import React from "react";

import { Container } from "./styles";

const MainCard: React.FC = () => {
  return (
    <Container>
      <div className="photo"></div>

      <div className="information_container">
        <h3>Título do jogo</h3>

        <span className="metacritic">90</span>
      </div>
    </Container>
  );
};

export default MainCard;
