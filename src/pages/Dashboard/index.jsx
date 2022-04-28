import { Container } from "./styles";
import { Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import api from "../../services/api";
import RegisterTech from "../../components/RegisterTech";
import TechDatails from "../../components/TechDetails";

const Dashboard = ({ authorized, setAuthorized }) => {
  const [techs, setTechs] = useState([]);
  const [techDetail, setTechDetail] = useState([])
  const [modalRegIsOpen, setRegIsOpen] = useState(false);
  const [modalDetIsOpen, setDetIsOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("KenzieHub:user")).id;
    api.get(`/users/${id}`).then((res) => setTechs(res.data.techs));
  }, []);

  const handleOpenRegModal = () => {
    setRegIsOpen(true);
  };
  const handleCloseRegModal = () => {
    setRegIsOpen(false);
  };

  const handleOpenDetModal = () => {
    setDetIsOpen(true);
  };
  const handleCloseDetModal = () => {
    setDetIsOpen(false);
  };

  const handleClickModal = (tech) => {
    handleOpenDetModal()
    setTechDetail(tech)
  }

  if (!authorized) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <RegisterTech
        setTechs={setTechs}
        modalRegIsOpen={modalRegIsOpen}
        setRegIsOpen={setRegIsOpen}
        handleCloseRegModal={handleCloseRegModal}
      />
      <TechDatails
        techs={techs}
        setTechs={setTechs}
        modalDetIsOpen={modalDetIsOpen}
        setDetIsOpen={setDetIsOpen}
        handleCloseDetModal={handleCloseDetModal}
        techDetail={techDetail}
      />
      <header>
      <h1>KenzieHub</h1>
      <button className="btnSair"
        onClick={() => {
          localStorage.clear();
          setAuthorized(false);
          history.push("/");
        }}
      >
        Sair
      </button>
      </header>
      <div className="overTechs">
      <h3>Tecnologias</h3>
      <button className="btnAdd" onClick={handleOpenRegModal}>+</button>
      </div>
      {techs.map((tech, idx) => (
        <Card key={idx} tech={tech} handleClickModal={handleClickModal} />
      ))}
    </Container>
  );
};

export default Dashboard;
