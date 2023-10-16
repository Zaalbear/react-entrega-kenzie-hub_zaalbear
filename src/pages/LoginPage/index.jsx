import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm";
import { Header } from "../../components/Header";

export const LoginPage = () => {
  return (
    <>
      <Header backBttn={false} />
      <LoginForm />

      <div>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">
          <button>Cadastre-se</button>
        </Link>
      </div>
    </>
  );
};
