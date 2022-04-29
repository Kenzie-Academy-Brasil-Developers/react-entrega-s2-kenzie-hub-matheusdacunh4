import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  color: white;
  padding: 10px;
  background-color: #121214;
  margin: 10px;
  border-radius: 4px;

  #status {
    color: #868e96;
  }

  :hover {
    background-color: #343b41;
  }

  @media (min-width: 801px) {
    width: 90%;
  }
`;
