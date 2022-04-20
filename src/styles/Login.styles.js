import styled from "styled-components";
import rick from "../images/rick-and-morty.jpg";

export const Main = styled.div`
  justify-content: center;
  align-items: center;
  background-size: cover;
  display: flex;
  height: 100vh;
`;

export const ImgBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
`;

export const TitleAndBtnContainer = styled.div`
  align-self: center;
  display: block;
  position: absolute;
  margin: auto;
  justify-content: center;
  text-align: center;
  width: 100%;

  h1 {
    color: white;
    text-shadow: 2px 2px 4px black;
    font-size: 35px;
  }
`;

export const LetsGoBtn = styled.button`
  padding: 10px;
  width: 200px;

    appearance: none;
    background-color: #12578A;
    border: none;
    border-radius: 6px;
    box-shadow: white 1px 1px 1px 1px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: 'Montserrat', -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    padding: 12px 32px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
  }

  &:focus:not(:focus-visible):not(.focus-visible) {
    box-shadow: none;
    outline: none;
  }

  &:hover {
    background-color: #083A5E;
  }

  &:focus {
    box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;
    outline: none;
  }

  &:disabled {
    background-color: #94d3a2;
    border-color: rgba(27, 31, 35, 0.1);
    color: rgba(255, 255, 255, 0.8);
    cursor: default;
  }

  &:active {
    background-color: #298e46;
    box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
  }
`;
