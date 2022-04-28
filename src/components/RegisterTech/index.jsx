import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { Container } from "./styles";
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
        handleCloseRegModal()
      })
      .catch((err) => {
        toast.error("Erro ao cadastrar tecnologia");
      });
  };

  return (
    <Modal isOpen={modalRegIsOpen} onRequestClose={handleCloseRegModal}>
      <button onClick={() => setRegIsOpen(false)}>Fechar</button>
      <h2>Cadastrar Tecnologia</h2>
      <div>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <input
            type="text"
            placeholder="Digite o nome da tecnologia"
            {...register("title")}
          />
          {errors.title?.message}
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status?.message}
          <button type="submit">Cadastrar tecnologia</button>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterTech;
