import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import Modal from "react-modal";
import api from "../../services/api";
import { toast } from "react-toastify";
Modal.setAppElement("#root");

const RegisterTech = ({
  setTechs,
  modalRegIsOpen,
  setRegIsOpen,
  handleCloseRegModal,
}) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Necessário nome da tecnologia"),
    status: yup.string().required("Selecione o satus"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onHandleSubmit = (data) => {
    const token = localStorage.getItem("KenzieHub:token");

    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const id = JSON.parse(localStorage.getItem("KenzieHub:user")).id;
        api.get(`/users/${id}`).then((res) => setTechs(res.data.techs));
        toast.success("Tecnologia cadastrada com sucesso");
        handleCloseRegModal();
      })
      .catch((err) => {
        toast.error("Erro ao cadastrar tecnologia");
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
      isOpen={modalRegIsOpen}
      onRequestClose={handleCloseRegModal}
      style={modalStyled}
    >
      <Container>
        <header>
          <div>
            <span>Cadastrar Tecnologia</span>
            <button onClick={() => setRegIsOpen(false)}>x</button>
          </div>
        </header>
        <div>
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <label className="inputName">Nome</label>
            <input
              type="text"
              placeholder="Digite o nome da tecnologia"
              {...register("title")}
            />
            {errors.title ? (
              <span>{errors.title.message}</span>
            ) : (
              <span className="hiddenSpan">sdauishdiu</span>
            )}
            <label className="selectLabel">Selecionar status</label>

            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status?.message}
            <button type="submit">Cadastrar tecnologia</button>
          </form>
        </div>
      </Container>
    </Modal>
  );
};

export default RegisterTech;
