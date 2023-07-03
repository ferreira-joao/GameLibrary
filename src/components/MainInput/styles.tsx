import styled from "styled-components";
import { breakpoint, colors } from "../../global/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;

  .icon_container {
    padding: 7.5px;
    border-radius: 8px 0 0 8px;
    background-color: ${colors.primary};
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 0 8px 8px 0;
    transition: 0.2s;

    @media ${breakpoint.lg} {
      width: 300px;
    }
  }

  input:focus {
    box-shadow: rgba(190, 39, 110, 1) 0px 3px 8px;
  }
`;
