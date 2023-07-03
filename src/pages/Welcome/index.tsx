import React from "react";
import { Container } from "./styles";
import logo from "../../assets/arcade.jpg";
import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  return (
    <Container>
      <div className="description">
        <h1>Welcome to GameLibrary!</h1>

        <p>
          Search information about the games you like and remember:{" "}
          <span>growing up is a trap!</span>
        </p>

        <Link to={"/home"}>
          <button>To the library!</button>
        </Link>
      </div>

      <div className="image_container">
        <img src={logo} />
      </div>
    </Container>
  );
};

export default Welcome;
