import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #212529;
  border-radius: 10.2px;
  header {
    border-top-left-radius: 10.2px;
    border-top-right-radius: 10.2px;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: #343b41;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;

      span {
        font-size: 11px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color: white;
      }

      button {
        background-color: #343b41;
        border: none;
        color: #868e96;

        :hover {
          background-color: #212529;
        }
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    margin-left: 10px;
    margin-right: 10px;

    .inputName {
      color: white;
      font-weight: 100;
      margin-bottom: 15px;
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: left;
      margin-top: 20px;
    }

    .selectLabel {
      margin-top: 20px;
      margin-bottom: 15px;
      color: white;
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: left;
    }

    input {
      height: 38.504066467285156px;
      width: 250.6582946777344px;
      left: 0px;
      top: 23.093292236328125px;
      border: 1px solid #f8f9fa;
      border-radius: 3.208672046661377px;
      padding: 0px, 13px, 0px, 13px;
      background-color: #343b41;
      color: white;

      ::placeholder {
        color: white;
        margin-left: 40px;
      }
    }

    span {
      font-size: small;
      color: red;
    }

    .hiddenSpan {
      color: #212529;
    }

    select {
      height: 38.504066467285156px;
      width: 256.6582946777344px;
      border-radius: 3.208672046661377px;
      padding: 0px, 13px, 0px, 13px;
      background-color: #343b41;
      color: white;
      border: 1px solid #f8f9fa;
    }

    button {
      height: 38.504066467285156px;
      width: 259.9024353027344px;
      left: 17.647705078125px;
      top: 210.1680145263672px;
      border-radius: 4.060661792755127px;
      padding: 0px, 22px, 0px, 22px;
      color: white;
      background-color: #ff577f;
      margin-top: 16px;
      border: 1.2182px solid #ff577f;
      box-sizing: border-box;
      border-radius: 4.06066px;

      :hover {
        background-color: #ff155f;
      }
    }
  }
`;
