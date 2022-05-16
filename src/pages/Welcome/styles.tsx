import styled from "styled-components";

import { colors } from "../../global/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: blur(5px);
  }

  .description {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    z-index: 1;

    h1 {
      color: ${colors.text};
    }

    p {
      color: ${colors.text};
      font-size: 20px;
    }

    span {
      color: ${colors.primary};
      font-size: 20px;
      font-weight: bold;
    }

    button {
      padding: 8px;
      margin-top: 5px;
      background-color: ${colors.primary};
      border: 1px solid ${colors.primary};
      color: ${colors.text};
      font-weight: bold;
      border-radius: 8px;
      transition: 0.5s;
    }

    button:hover {
      opacity: 0.5;
    }
  }
`;
