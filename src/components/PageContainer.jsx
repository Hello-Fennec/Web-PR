import styled from "styled-components";

const PageContainer = styled.div`
  opacity: 0;
  transform: translateY(10%);
  transition:all 700ms ease-in-out ;

  &.active {
    opacity: 1;
  transform: translateY(0);
  }
`

export default PageContainer;