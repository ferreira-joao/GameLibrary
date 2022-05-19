import styled from "styled-components";
import { colors } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  border-radius: 20px;
  background-color: ${colors.background_third};

  .photo {
    background-color: ${colors.primary};
    width: 100%;
    height: 150px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .information_container {
    padding: 10px;
  }

  h3 {
    margin: 5px 0;
    color: ${colors.text};
  }

  .metacritic {
    display: inline-block;
    padding: 5px;
    border-radius: 8px;
    border: 1px solid ${colors.good_score};
    color: ${colors.good_score};
  }
`;
