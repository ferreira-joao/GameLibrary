import styled from "styled-components";

import { colors } from "../../global/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};
`;

export const Header = styled.div`
  padding-bottom: 10px;
  background-color: ${colors.background_secondary};
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }

  h1 {
    color: #fff;
  }
`;
