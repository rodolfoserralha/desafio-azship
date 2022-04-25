import styled from "styled-components";

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  margin-top: 30px !important;
  width: 90%;
`;

export const CharacterCardContainer = styled.div`
  border-radius: 10px;
  // border: 3px solid #1e2838;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  overflow: hidden;
  // height: 350px;
  width: 12%;

  @media (max-width: 1000px) {
    width: 18%;
  }
`;

export const CharacterImg = styled.img`
  border-radius: 10px 10px 0px 0px;
  width: 100%;
`;

export const CharacterName = styled.h3`
  margin-left: 10px;
  color: #1e2838;
`;

export const CharacterSpecie = styled.p`
  color: #1e2838;
  margin-left: 10px;
`;

export const CharacterStatus = styled.p`
  color: #1e2838;
  margin-left: 10px;
`;
