import styled from "styled-components";

const Floating = styled.div`
  animation: floating 2s ease-in-out infinite;
  transition: all 0.5s ease-in-out;

  &.active {
    opacity: 1;
  }

  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default Floating;