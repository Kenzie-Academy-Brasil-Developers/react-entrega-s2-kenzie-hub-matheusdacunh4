import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #121214; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    align-items: center;
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 12px;
  }
  .hidden {
    display: none;
  }
`;
