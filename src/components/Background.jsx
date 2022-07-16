import styled from "styled-components";

const Background = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default Background;