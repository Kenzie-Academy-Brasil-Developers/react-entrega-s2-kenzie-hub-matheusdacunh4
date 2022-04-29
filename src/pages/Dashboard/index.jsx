import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import api from "../../services/api";
import RegisterTech from "../../components/RegisterTech";
import TechDatails from "../../components/TechDetails";

const Dashboard = ({ authorized, setAuthorized }) => {
  const [techs, setTechs] = useState([]);
  const [techDetail, setTechDetail] = useState([]);
  const [modalRegIsOpen, setRegIsOpen] = useState(false);
  const [modalDetIsOpen, setDetIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("KenzieHub:user"));

  const history = useHistory();

  useEffect(() => {
    const userId = user.id;
    api.get(`/users/${userId}`).then((res) => setTechs(res.data.techs));
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
    handleOpenDetModal();
    setTechDetail(tech);
  };

  if (!authorized) {
    history.push("/");
    window.location.reload();
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
        <button
          className="btnSair"
          onClick={() => {
            localStorage.clear();
            setAuthorized(false);
            history.push("/");
          }}
        >
          Sair
        </button>
      </header>
      <div className="toWelcome">
        <div className="toWelcomeInner">
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </div>
      </div>
      <div className="overTechs">
        <h3>Tecnologias</h3>
        <button className="btnAdd" onClick={handleOpenRegModal}>
          +
        </button>
      </div>
      <div className="techs">
        {techs.map((tech, idx) => (
          <Card key={idx} tech={tech} handleClickModal={handleClickModal} />
        ))}
      </div>
    </Container>
  );
};

export default Dashboard;
