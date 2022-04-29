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
    email: yup.string().required("Por favor digite seu email").email("Email inválido"),
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
      <span className="logo">Kenzie Hub</span>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <h3>Login</h3>
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email ? (
          <span className="error">{errors.email.message}</span>
        ) : (
          <span className="hiddenSpan">sdjsdh</span>
        )}
        <label className="senha">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password ? (
          <span className="error">{errors.password.message}</span>
        ) : (
          <span className="hiddenSpan">sdjsdh</span>
        )}
        <button className="btnEntrar" type="submit">Entrar</button>
        <span className="spanCad">Ainda não possui uma conta?</span>
        <button
        className="btnCad"
          onClick={() => {
            history.push("/cadastro");
          }}
        >
          Cadastre-se
        </button>
      </form>
    </Container>
  );
};

export default Login;
