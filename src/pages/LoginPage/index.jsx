import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm";
import { Header } from "../../components/Header";

export const LoginPage = ({ setUserData }) => {
  return (
    <>
      <Header backBttn={false} />
      <LoginForm setUserData={setUserData} />

      <div>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">
          <button>Cadastre-se</button>
        </Link>
      </div>
    </>
  );
};
