import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #1e2838;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  width: 100%;

  img {
    width: 15%;
  }
`;

export const HeaderLink = styled(Link)`
  color: white;
  font-size: 35px;
  font-weight: 700;
  text-decoration: none;
`;
