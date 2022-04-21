import { Link } from "react-router-dom";
import styled from "styled-components";

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

export const FavoriteBtn = styled.button`
  border: none;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  font-size: 32px;
  cursor: pointer;
  height: 50px;

  &:before {
    font-size: 1em;
    color: #000;
    content: "♥";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &:after {
    font-size: 3em;
    color: $red;
    content: "♥";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.2s;
  }
  &.liked::after {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
