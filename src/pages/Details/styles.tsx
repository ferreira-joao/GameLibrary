import styled from "styled-components";

import { colors } from "../../global/theme";

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
        font-size: 14px;
        text-transform: uppercase;
      }
    }

    .date_icons {
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .playtime {
      color: ${colors.text};
      text-transform: uppercase;
    }
  }
`;
