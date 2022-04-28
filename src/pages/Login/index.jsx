import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import api from "../../services/api";
import { Redirect, useHistory } from "react-router-dom";
// import { toast } from "react-hot-toast";
import { toast } from "react-toastify";

const Login = ({ authorized, setAuthorized }) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Por favor digite seu email").email(),
    password: yup.string().required("Por favor digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onHandleSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        localStorage.setItem("KenzieHub:token", res.data.token);
        localStorage.setItem("KenzieHub:user", JSON.stringify(res.data.user));

        setAuthorized(true);
        history.push("/dashboard");
        toast.success("Bem vindo(a)");
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
      <form onSubmit={handleSubmit(onHandleSubmit)}>
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
        <button type="submit">Entrar</button>
      </form>
      <button
        onClick={() => {
          history.push("/cadastro");
        }}
      >
        Cadastre-se
      </button>
    </Container>
  );
};

export default Login;
