import styled from "styled-components";
import { colors } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  background-color: ${colors.darkblue};

  p {
    color: ${colors.text};
  }
`;
