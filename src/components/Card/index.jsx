import { Container } from "./styled";

const Card = ({ tech, handleClickModal }) => {
  return (
    <Container onClick={() => handleClickModal(tech)}>
      <span >{tech.title}</span>
      <span>{tech.status}</span>
    </Container>
  );
};

export default Card;
