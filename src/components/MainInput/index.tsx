import React from "react";

import { Container } from "./styles";

import { RiSearch2Line } from "react-icons/ri";

const MainInput: React.FC = () => {
  return (
    <Container>
      <div className="icon_container">
        <RiSearch2Line size={20} style={{ color: "#FFF" }} />
      </div>

      <input type="text" placeholder="Search a game..." />
    </Container>
  );
};

export default MainInput;
