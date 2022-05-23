import styled, { css } from "styled-components";
import { breakpoint, colors } from "../../global/theme";

interface IMeta {
  score: number;
}

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  border-radius: 20px;
  background-color: ${colors.background_third};
  margin-bottom: auto;
  transition: 0.3s;

  &:hover {
    transform: translateY(-7px);
    box-shadow: rgba(190, 39, 110, 1) 0px 3px 8px;
  }

  .photo {
    background-color: ${colors.darkblue};
    width: 100%;
    height: 150px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    @media ${breakpoint.sm} {
      height: 180px;
    }
  }

  .information_container {
    padding: 0 10px;
  }

  .icon_score {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  h3 {
    cursor: pointer;
    color: ${colors.text};
    display: inline;
  }

  h3:hover {
    text-decoration: underline;
  }

  .date_genres {
    padding: 0 10px;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 14px;
      color: ${colors.text};
    }

    .release_date {
      width: 100%;
      padding-bottom: 5px;
      border-bottom: 1px solid #fff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .genres {
      width: 100%;
      margin-top: 5px;
      padding-bottom: 5px;
      border-bottom: 1px solid #fff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .genre_container {
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        gap: 5px;
        flex-wrap: wrap;
      }
    }
  }

  .expand_button {
    margin-top: 10px;
    padding-bottom: 5px;
    display: flex;
    justify-content: center;

    p {
      font-size: 12px;
      color: ${colors.text};
      cursor: pointer;
    }

    p:hover {
      text-decoration: underline;
    }
  }
`;

export const Meta = styled.span<IMeta>`
  display: inline-block;
  padding: 0 5px;
  border-radius: 8px;
  ${(props) =>
    props.score <= 59
      ? css`
          color: ${colors.bad_score};
          border: 1px solid ${colors.bad_score};
        `
      : props.score <= 79
      ? css`
          color: ${colors.medium_score};
          border: 1px solid ${colors.medium_score};
        `
      : css`
          color: ${colors.good_score};
          border: 1px solid ${colors.good_score};
        `}
`;
