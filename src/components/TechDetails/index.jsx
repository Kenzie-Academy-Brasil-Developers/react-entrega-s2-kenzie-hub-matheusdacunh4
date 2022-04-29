import { useForm } from "react-hook-form";
import { Container } from "./styles";
import Modal from "react-modal";
import api from "../../services/api";
import { toast } from "react-toastify";
Modal.setAppElement("#root");

const TechDatails = ({
  setTechs,
  modalDetIsOpen,
  setDetIsOpen,
  handleCloseDetModal,
  techDetail,
}) => {
  const { register, handleSubmit } = useForm();

  const onHandleSubmit = (data) => {
    const token = localStorage.getItem("KenzieHub:token");
    const techId = techDetail.id;

    api
      .delete(`/users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const userId = JSON.parse(localStorage.getItem("KenzieHub:user")).id;
        api.get(`/users/${userId}`).then((res) => setTechs(res.data.techs));

        toast.success("Tecnologia excluída com sucesso");
        handleCloseDetModal();
      })
      .catch((err) => {
        toast.error("Erro ao excluir a tecnologia");
      });
  };

  const modalStyled = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    content: {
      position: "absolute",
      top: "45%",
      right: "auto",
      left: "50%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid rgba(0, 0, 0, 0)",
      // background: "#fff"
      backgroundColor: "rgba(0, 0, 0, 0)",
      overflow: "hidden",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px",
    },
  };

  return (
    <Modal
      isOpen={modalDetIsOpen}
      onRequestClose={handleCloseDetModal}
      style={modalStyled}
    >
      <Container>
        <header>
          <div>
            <span>Tecnologia Detalhes</span>
            <button onClick={() => setDetIsOpen(false)}>x</button>
          </div>
        </header>
        <div>
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <label className="inputName">Nome do projeto</label>
            <input
              disabled
              type="text"
              placeholder={techDetail.title}
              {...register("title")}
            />
            <label className="selectLabel">Status</label>
            <select disabled {...register("status")}>
              <option value>{techDetail.status}</option>
            </select>
            <div>
              <button
                className="altera"
                style={{ backgroundColor: "#59323F", color: "white" }}
                disabled
              >
                Salvar alterações
              </button>
              <button className="excluir" type="submit">
                Excluir
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Modal>
  );
};

export default TechDatails;
