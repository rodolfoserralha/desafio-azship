import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "../images/iconmonstr-favorite-3.svg";

export const CardContainer = styled.div`
  background: #f2f2f2;
  border-radius: 10px;
  // border: 3px solid #1e2838;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LinkCardContainer = styled(Link)`
  // background-color: pink;
  display: flex;
  color: #1e2838;
  flex-direction: column;
  justify-content: space-between;
  // margin-left: 10px;
  // margin-right: 5px;
  text-decoration: none;
  height: 100%;

  p {
    margin-left: 10px;
    margin-right: 5px;
    white-space: normal;
    margin-right: 5px;
  }
`;

export const FavoriteLabel = styled.label``;

export const FavoriteCheckBox = styled.input`
  align-items: center;
  appearance: none;
  border: none;
  border-radius: 5px;
  content: url(${icon});
  cursor: pointer;
  display: flex;
  font-size: 15px;
  height: 30px;
  justify-content: center;
  margin: auto;
  margin-bottom: 8px !important;
  width: 30px;

  &:checked {
    filter: invert(20%) sepia(95%) saturate(6888%) hue-rotate(358deg)
      brightness(110%) contrast(114%);
  }
`;
