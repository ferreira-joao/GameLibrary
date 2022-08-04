import styled from "styled-components";

import { colors } from "../../global/theme";

export const HeaderContainer = styled.div`
  width: 100%;
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
`;
