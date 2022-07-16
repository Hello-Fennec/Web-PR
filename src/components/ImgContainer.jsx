import styled from "styled-components";

const ImgContainer = styled.div`
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export default ImgContainer;