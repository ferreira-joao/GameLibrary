import styled from "styled-components";
import { breakpoint, colors } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  border-radius: 20px;
  background-color: ${colors.background_third};
  margin-bottom: auto;

  .photo {
    background-color: ${colors.primary};
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

  span {
    display: inline-block;
    padding: 0 5px;
    border-radius: 8px;
    border: 1px solid ${colors.good_score};
    color: ${colors.good_score};
  }

  h3 {
    margin: 5px 0;
    cursor: pointer;
    color: ${colors.text};
  }

  h3:hover {
    text-decoration: underline;
  }

  .date_genres {
    padding: 0 10px;
    margin-bottom: 5px;
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
      padding-bottom: 5px;
      border-bottom: 1px solid #fff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
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
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
