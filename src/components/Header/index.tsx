import React from "react";
import { HeaderContainer } from "./styles";
import logo from "../../assets/game_controller.svg";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logo} />

      <h2>GameLibrary</h2>
    </HeaderContainer>
  );
};

export default Header;
