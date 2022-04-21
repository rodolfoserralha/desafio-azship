import React from "react";
import { ImgBackground, LetsGoBtn, Main, TitleAndBtnContainer } from "../styles/Login.styles";
import rick from "../images/rick-and-morty.jpg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const storage = JSON.parse(localStorage.getItem('favorite_episodes'));
  if (!storage) localStorage.setItem('favorite_episodes', JSON.stringify([]));

  return (
    <Main>
      <ImgBackground src={rick} alt="img" />
      <TitleAndBtnContainer>
        <h1>Bem vindo ao mundo do Ricky and Morty! Preparado?</h1>
        <LetsGoBtn onClick={ () => navigate('/episodes') }>
          Claro!
        </LetsGoBtn>
      </TitleAndBtnContainer>
    </Main>
  );
}
