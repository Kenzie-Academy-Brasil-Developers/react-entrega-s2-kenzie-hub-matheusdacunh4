import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #121214;

  display: flex;
  flex-direction: column;
  align-items: center;
  

  .logo {
    margin-top: 12vh;
    color: #ff577f;
    font-size: larger;
    font-weight: 600;
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
    background-color: #212529;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    h3 {
      margin-top: 30px;
      color: white;
    }

    label {
      margin-bottom: 10px;
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: left;
      color: white;
      width: 90%;
    }

    input {
      width: 90%;
      height: 38.504066467285156px;
      /* width: 264.6582946777344px; */
      left: 0px;
      top: 23.09326171875px;
      border-radius: 3.208672046661377px;
      padding: 0px, 13px, 0px, 13px;
      background-color: #343b41;
      color: white;
      border: 0.9772px solid #f8f9fa;
      box-sizing: border-box;
      border-radius: 3.20867px;
    }

    .senha {
      margin-top: 20px;
    }

    .hiddenSpan {
      color: #212529;
      font-size: small;
      margin-top: 3px;
    }

    .error {
      color: red;
      font-size: small;
      width: 88%;
      text-align: left;
      margin-top: 3px;
    }

    .btnEntrar {
      margin-top: 10px;
      margin-left: 13px;
      margin-right: 13px;
      height: 38.504066467285156px;
      width: 259.9024353027344px;
      left: 18.048828125px;
      top: 232.628662109375px;
      border-radius: 4.060661792755127px;
      padding: 0px, 22px, 0px, 22px;
      background-color: #ff577f;
      color: white;
      border: 1.2182px solid #ff577f;
      box-sizing: border-box;
      border-radius: 4.06066px;

      :hover {
        background-color: #ff544f;
      }
    }

    .spanCad {
      margin-top: 30px;
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      color: #868e96;
    }

    .btnCad {
      margin-top: 10px;
      margin-bottom: 33px;
      height: 40px;
      width: 259.9024353027344px;
      left: 0px;
      top: 0px;
      border: 1.2182px solid #868e96;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 0px, 22px, 0px, 22px;
      background-color: #868e96;
      color: white;

      :hover {
        background-color: #343b41;
      }
    }
  }
`;
