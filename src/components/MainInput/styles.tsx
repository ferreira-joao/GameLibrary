import styled from "styled-components";

import { breakpoint } from "../../global/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 10px;
    padding-left: 35px;
    border: 1px solid #eee;
    border-radius: 8px;
    transition: 0.2s;

    @media ${breakpoint.lg} {
      width: 300px;
    }
  }

  input:focus {
    box-shadow: rgba(190, 39, 110, 1) 0px 3px 8px;
  }
`;
