import React from "react";
import { Container } from "./styles";
import { RiSearch2Line } from "react-icons/ri";

interface IMainInput {
  value: string;
  change: (e: string) => void;
}

const MainInput: React.FC<IMainInput> = ({ value, change }) => {
  return (
    <Container>
      <div className="icon_container">
        <RiSearch2Line size={20} style={{ color: "#FFF" }} />
      </div>

      <input
        type="text"
        placeholder="Search a game..."
        value={value}
        onChange={(e) => change(e.target.value)}
      />
    </Container>
  );
};

export default MainInput;
