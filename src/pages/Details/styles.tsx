import styled from "styled-components";
import { breakpoint, colors } from "../../global/theme";

export const Container = styled.div`
  .details_header {
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
`;

export const DetailsBody = styled.div`
  padding: 10px;

  @media ${breakpoint.md} {
    padding: 10px 100px;
  }

  @media ${breakpoint.lg} {
    padding: 10px 200px;
  }

  .details_loading {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .details_content {
    padding: 10px;
    border-radius: 20px;
    background-color: ${colors.background_second};

    .date_container {
      border-radius: 5px;
      padding: 5px;
      margin-bottom: 10px;
      background-color: #f2f2f2;

      p {
        font-size: 13px;
        text-transform: uppercase;

        @media ${breakpoint.lg} {
          font-size: 16px;
        }
      }
    }

    .date_icons {
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .playtime {
      font-size: 13px;
      font-weight: bold;
      color: ${colors.primary};
      text-transform: uppercase;

      @media ${breakpoint.lg} {
        font-size: 16px;
      }
    }

    h2 {
      text-align: center;
      color: ${colors.text};
    }
  }
`;

export const GameDetails = styled.div`
  padding: 5px 10px;
  text-align: left;

  h3 {
    color: ${colors.subtitle};
  }

  p {
    line-height: 19.5px;
    font-size: 13px;
    color: ${colors.text};

    @media ${breakpoint.lg} {
      font-size: 16px;
    }
  }

  ul {
    list-style: none;
  }

  li {
    font-size: 14px;
    color: ${colors.text};

    @media ${breakpoint.lg} {
      font-size: 16px;
    }
  }
`;

export const ShowMore = styled.span`
  margin: 5px;
  color: ${colors.primary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const PlatformList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  li {
    color: ${colors.primary};
    background-color: ${colors.secondary};
    border: 2px solid ${colors.primary};
    border-radius: 8px;
    font-size: 13px;
    font-weight: bold;
    padding: 4px;

    @media ${breakpoint.lg} {
      font-size: 16px;
    }
  }
`;

export const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #151515;
  border-radius: 8px; */

  .rating_chart {
    width: 100%;

    @media ${breakpoint.lg} {
      width: 50%;
    }
  }
`;
