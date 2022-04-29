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
      color: #868e96;

      ::placeholder {
        color: #868e96;
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
      color: #868e96;
      border: 1px solid #f8f9fa;
    }

    .altera {
      height: 38.37398147583008px;
      width: 163.0894317626953px;
      left: 0px;
      top: 0px;
      border-radius: 4px;
      padding: 0px, 22px, 0px, 22px;
      margin-right: 10px;
      border: 1.2182px solid #59323f;
      box-sizing: border-box;
    }

    .excluir {
      height: 38.37398147583008px;
      width: 78.34687805175781px;
      left: 180.677490234375px;
      top: 0px;
      border-radius: 4px;
      padding: 0px, 22px, 0px, 22px;

      color: white;
      background-color: #868e96;
      margin-top: 16px;
      border: 1.2182px solid #868e96;
      box-sizing: border-box;
      border-radius: 4.06066px;

      :hover {
        background-color: #343b41;
      }
    }
  }
`;
