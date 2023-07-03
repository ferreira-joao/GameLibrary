import styled from "styled-components";
import { breakpoint } from "../../global/theme";

export const List = styled.ul`
  @media ${breakpoint.md} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
  }
`;
