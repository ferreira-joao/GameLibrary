import styled from "styled-components";
import { breakpoint, colors } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.darkblue};

  @media ${breakpoint.lg} {
    display: flex;
    flex-direction: row;
    padding-left: 40px;
  }

  .description {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;

    @media ${breakpoint.lg} {
      width: 50%;
      position: relative;
    }

    h1 {
      color: ${colors.text};
    }

    p {
      color: ${colors.text};
      font-size: 20px;
    }

    span {
      color: ${colors.primary};
      font-size: 20px;
      font-weight: bold;
    }

    button {
      padding: 8px;
      margin-top: 5px;
      background-color: ${colors.primary};
      border: 1px solid ${colors.primary};
      color: ${colors.text};
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.5s;

      @media ${breakpoint.md} {
        width: 300px;
      }

      @media ${breakpoint.lg} {
        font-size: 20px;
        padding: 15px;
      }
    }

    button:hover {
      opacity: 0.5;
    }
  }

  .image_container {
    @media ${breakpoint.lg} {
      width: 50%;
      display: flex;
      align-items: center;
    }

    img {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: blur(5px);

      @media ${breakpoint.lg} {
        filter: blur(0);
        object-fit: contain;
        position: relative;
      }
    }
  }
`;
