import React from "react";
import { ImgBackground, LetsGoBtn, Main, TitleAndBtnContainer } from "../styles/Login.styles";
import rick from "../images/rick-and-morty.jpg";

export default function Login() {
  return (
    <Main>
      <ImgBackground src={rick} alt="img" />
      <TitleAndBtnContainer>
        <h1>Preparado para entrar no mundo do Ricky and Morty?</h1>
        <LetsGoBtn>
          Claro!
        </LetsGoBtn>
      </TitleAndBtnContainer>
    </Main>
  );
}
