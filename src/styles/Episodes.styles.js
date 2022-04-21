import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 12% 12% 12% 12% 12% 12%;
  // grid-template-rows: 9% 9% 9% 9% 9% 9% 9% 9% 9%;
  grid-auto-rows: minmax(9%, auto);
  grid-gap: 50px;
  margin-top: 50px;
  justify-content: center;
  width: 100%;
`;

export const PageNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
`;

export const NumberPageBtn = styled.button`
  background-color: ${(props) => (props.selected ? "#1e2838" : "white")};
  border-radius: 50%;
  border: 2px solid #1e2838;
  color: ${(props) => (props.selected ? "white" : "#1e2838")};
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  margin: 5px;
  height: 50px;
  width: 50px;

  &:hover {
    transform: scale(1.2);
  }
`;
