import React from "react";

import { Container } from "./styles";

import { SiPlaystation, SiNintendo } from "react-icons/si";

const MainCard: React.FC = () => {
  return (
    <Container>
      <div className="photo"></div>

      <div className="information_container">
        <div className="icon_score">
          <div className="icons">
            <SiPlaystation size={20} color="#FFF" style={{ marginRight: 5 }} />
            <SiNintendo size={20} color="#FFF" style={{ marginRight: 5 }} />
          </div>

          <span>90</span>
        </div>

        <h3>Título do jogo</h3>
      </div>
    </Container>
  );
};

export default MainCard;
