import styled from "styled-components";
import { breakpoint, colors } from "../../global/theme";

export const Container = styled.div`
  .input_content {
    display: flex;
    width: 100%;
    position: relative;

    .icon_container {
      min-width: 40px;
      padding: 8px;
      border-radius: 8px 0 0 8px;
      background-color: ${colors.primary};
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input {
      width: 100%;
      padding: 8px;
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

    .icon_container_close {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 12px;
      top: 8px;
    }
  }
`;
