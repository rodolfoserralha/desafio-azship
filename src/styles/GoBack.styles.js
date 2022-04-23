import styled from "styled-components";
import goback from "../images/back.svg";

export const GoBackBtn = styled.button`
  border: none;
  background-color: white;
  background-image: url(${goback});
  background-repeat: no-repeat;
  cursor: pointer;
  font-size: 25px;
  margin-top: 20px;
  margin-left: 20px;
  padding-left: 50px;
  // background-size: 10px;
  height: 40px;
  width: 40px;

  &:hover {
    transform: scale(1.1);
  }
`;
