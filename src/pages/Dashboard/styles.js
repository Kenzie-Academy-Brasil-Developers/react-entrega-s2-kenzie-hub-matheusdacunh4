import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #23262a;
  height: 100vh;
  width: 100vw;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
  }
  h1 {
    border-radius: 0px;

    color: #ff577f;
  }

  h3 {
    text-align: start;
  }

  .btnSair {
    height: 32px;
    width: 55.485294342041016px;
    left: 1050px;
    top: 20px;
    border-radius: 4px;
    padding: 0px, 16px, 0px, 16px;

    color: white;
    background-color: #212529;

    :hover {
      background-color: #343b41;
    }
  }

  .overTechs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
  }

  .btnAdd {
    height: 32px;
    width: 32.485294342041016px;
    left: 0px;
    top: 0px;
    border-radius: 4px;

    color: white;
    background-color: #212529;

    :hover {
      background-color: #343b41;
    }
  }
`;
