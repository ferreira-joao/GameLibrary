import styled from "styled-components";

export const Spinner = styled.div`
  position: relative;

  .icon {
    -webkit-animation: icon-spin 2s infinite linear;
    animation: icon-spin 2s infinite linear;

    @-webkit-keyframes icon-spin {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
      }
    }

    @keyframes icon-spin {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
      }
    }
  }
`;
