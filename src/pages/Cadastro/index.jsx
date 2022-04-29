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
      <div className="logo">
        <span className="spanLogo">Kenzie Hub</span>
        <button onClick={() => history.push("/")}>Voltar</button>
      </div>

      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <h3>Crie sua conta</h3>
        <span className="sub">Rapido e grátis, vamos nessa</span>
        <label htmlFor="">Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        <span className="error">{errors.name?.message}</span>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <span className="error">{errors.email?.message}</span>
        <label htmlFor="">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <span className="error">{errors.password?.message}</span>
        <label htmlFor="">Confirmar senha</label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        <span className="error">{errors.confirmPassword?.message}</span>
        <label htmlFor="">Selecionar módulo</label>
        <select {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
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

        <button className="btnCad" type="submit">Cadastrar</button>
      </form>
    </Container>
  );
};

export default Cadastro;
