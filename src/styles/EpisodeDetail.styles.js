import styled from "styled-components";

export const EpisodeDetailContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  // border: 3px solid #1e2838;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 50px !important;
  margin: auto;
  padding: 10px;
  width: 80%;
`;

export const TitleDateContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    align-self: center;
    color: #1e2838;
  }
`;

export const EpisodeTitle = styled.h1`
  align-self: center;
  color: #1e2838;
  margin: 10px;
  // font-weight: 500;
`;

export const EpisodeDate = styled.p`
  margin: 10px;
  margin-right: 40px;
  align-self: flex-end;
`;
