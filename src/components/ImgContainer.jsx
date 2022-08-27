import styled from "styled-components";

const ImgContainer = styled.div`
  background-image: url(${(props) => props.src});
  background-size: ${(props) => (props.size ? props.size : "contain")};
  background-position: ${(props) => (props.position ? props.position : "center")};
  background-repeat: no-repeat;
`;

export default ImgContainer;
