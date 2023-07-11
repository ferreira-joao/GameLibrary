import React from "react";
import { Container } from "./styles";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useSearchContext } from "../../context/searchText";

interface IMainInput {
  value: string;
  change: (e: string) => void;
}

const MainInput: React.FC<IMainInput> = ({ value, change }) => {
  const { searchText, setSearchText } = useSearchContext();

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

      <div className="icon_container_close">
        {searchText ? (
          <AiOutlineClose
            size={20}
            style={{ color: "#ff1a1a", cursor: "pointer" }}
            onClick={() => setSearchText("")}
          />
        ) : (
          <AiOutlineClose size={20} style={{ color: "#ccc" }} />
        )}
      </div>
    </Container>
  );
};

export default MainInput;
