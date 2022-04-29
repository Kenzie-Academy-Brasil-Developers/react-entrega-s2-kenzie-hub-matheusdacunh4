import { Container } from "./styled";

const Card = ({ tech, handleClickModal }) => {
  return (
    <Container onClick={() => handleClickModal(tech)}>
      <span >{tech.title}</span>
      <span id="status">{tech.status}</span>
    </Container>
  );
};

export default Card;
