import React from "react";

import { HeaderContainer } from "./styles";

import logo from "../../assets/game_controller.svg";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logo} />

      <h1>GameLibrary</h1>
    </HeaderContainer>
  );
};

export default Header;
