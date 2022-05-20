import styled from "styled-components";

import { breakpoint, colors } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.background_second};

  .home_header {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.darkblue};
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
    padding: 0 10px;
  }
`;
