import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #121214;
  height: 100vh;
  width: 100vw;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
  }
  h1 {
    font-size: 20px;
    color: #ff577f;
  }

  .btnSair {
    height: 32px;
    width: 55.485294342041016px;
    left: 1050px;
    top: 20px;
    border: 1px solid #212529;
    border-radius: 4px;
    padding: 0px, 16px, 0px, 16px;

    color: white;
    background-color: #212529;

    :hover {
      background-color: #343b41;
    }
  }

  .toWelcome {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100vw;
    border-top: 2px solid #212529;
    border-bottom: 2px solid #212529;

    @media (max-width: 1200px) {
      .toWelcomeInner {
        margin-left: 5vw;
      }
    }

    h2 {
      font-size: 18px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
    }

    p {
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      color: #868e96;
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
    border: 1px solid #212529;
    color: white;
    background-color: #212529;

    :hover {
      background-color: #343b41;
    }
  }

  .techs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #212529;
    width: 90vw;
    border-radius: 4px;
  }
  @media (min-width: 1200px) {
    header {
      width: 50vw;
    }

    h1 {
      font-size: 30px;
    }

    .toWelcome {
      display: flex;
      align-items: center;
    }

    .toWelcomeInner {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 50vw;
      height: 118px;
      margin-left: 0px;
    }

    .overTechs {
      width: 50vw;
    }

    .techs {
      width: 50vw;
    }
  }
`;
