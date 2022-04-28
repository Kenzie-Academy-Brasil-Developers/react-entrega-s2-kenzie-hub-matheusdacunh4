import { useForm } from "react-hook-form";
// import { Container } from "./styles";
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

  return (
    <Modal isOpen={modalDetIsOpen} onRequestClose={handleCloseDetModal}>
      <button onClick={() => setDetIsOpen(false)}>Fechar</button>
      <h2>Tecnologia Detalhes</h2>
      <div>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <input
            disabled
            type="text"
            placeholder={techDetail.title}
            {...register("title")}
          />
          <select disabled {...register("status")}>
            <option value>{techDetail.status}</option>
          </select>
          <button style={{backgroundColor: "#59323F", color: "white"}} disabled>Salvar alterações</button>
          <button type="submit">Excluir</button>
        </form>
      </div>
    </Modal>
  );
};

export default TechDatails;
