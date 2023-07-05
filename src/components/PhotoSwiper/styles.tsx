import styled from "styled-components";
import { breakpoint, colors } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  background-color: ${colors.darkblue};

  .photo {
    background-color: ${colors.darkblue};
    width: 100%;
    height: 100%;
    border-radius: 10px;

    @media ${breakpoint.sm} {
      height: 180px;
    }
  }

  p {
    color: ${colors.text};
  }
`;
