import React from "react";

import { Container } from "./styles";

import { RiSearch2Line } from "react-icons/ri";

const MainInput: React.FC = () => {
  return (
    <Container>
      <RiSearch2Line size={20} style={{ position: "absolute", left: 20 }} />

      <input type="text" placeholder="Search a game..." />
    </Container>
  );
};

export default MainInput;
