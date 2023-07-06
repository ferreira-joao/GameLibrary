import styled from "styled-components";
import { breakpoint, colors } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  background-color: ${colors.darkblue};

  @media ${breakpoint.sm} {
    height: 200px;
  }

  @media ${breakpoint.md} {
    height: 250px;
  }

  @media ${breakpoint.lg} {
    height: 400px;
  }

  .photo {
    background-color: ${colors.darkblue};
    width: 100%;
    height: 100%;
    border-radius: 10px;

    @media ${breakpoint.sm} {
      height: 200px;
    }

    @media ${breakpoint.md} {
      height: 250px;
    }

    @media ${breakpoint.lg} {
      height: 400px;
    }
  }

  p {
    color: ${colors.text};
  }
`;
