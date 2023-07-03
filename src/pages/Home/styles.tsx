import styled from "styled-components";
import { breakpoint, colors } from "../../global/theme";

export const Container = styled.div`
  padding-bottom: 20px;

  @media ${breakpoint.lg} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home_header {
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
  }

  .home_icon {
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input_container {
    padding: 0 10px;
    margin-top: 10px;
  }

  .zero_games {
    color: #fff;
    margin-top: 30px;
    text-align: center;
  }

  .list_body {
    margin-top: 10px;
    padding: 0 10px;

    @media ${breakpoint.lg} {
      width: 80%;
    }
  }
`;

export const MainButton = styled.button`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  border-radius: 20px;
  margin-top: 16px;
  border: 1px solid ${colors.primary};
  background-color: ${colors.primary};
  color: #fff;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.5;
  }
`;
