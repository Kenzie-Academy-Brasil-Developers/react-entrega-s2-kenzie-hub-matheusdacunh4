import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import api from "../../services/api";
import { Redirect, useHistory } from "react-router-dom";
// import { toast } from "react-hot-toast";
import { toast } from "react-toastify";

const Cadastro = ({ authorized, setAuthorized }) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Por favor digite seu email")
      .email("Email inválido"),
    password: yup
      .string()
      .min(8, "Minimo 8 dígitos")
      .required("Por favor digite sua senha"),
    confirmPassword: yup
      .string()
      .required("Por favor, confirme sua senha")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),

    name: yup.string().required("Por favor, digite seu nome"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onHandleSubmit = ({
    name,
    email,
    password,
    course_module,
    contact,
    bio,
  }) => {
    const user = {
      email: email,
      password: password,
      name: name,
      bio: bio,
      contact: contact,
      course_module: course_module,
    };
    api
      .post("/users", user)
      .then((res) => {
        history.push("/login");
        toast.success("Cadastrado com sucesso");
      })
      .catch((err) => {
        toast.error("Ops, algo deu errado");
      });
  };

  if (authorized) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <button onClick={() => history.push("/")}>Voltar</button>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <input
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        {errors.name?.message}
        <input
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email?.message}
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password?.message}
        <input
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message}
        <select {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        {errors.course_module?.message}
        <input
          className="hidden"
          type="text"
          value="something"
          {...register("bio")}
        />
        <input
          className="hidden"
          type="text"
          value="something"
          {...register("contact")}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
};

export default Cadastro;
