import styled from "styled-components";

import { breakpoint, colors } from "../../global/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};

  .home_header {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.background_secondary};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    img {
      width: 100px;
      height: 100px;
    }

    h1 {
      color: ${colors.text};
    }
  }

  .home_body {
    margin-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
