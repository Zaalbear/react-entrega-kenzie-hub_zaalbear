import { LoginForm } from "../../components/Forms/LoginForm";
import { Header } from "../../components/Header";

export const LoginPage = ({ setUserData }) => {
  return (
    <>
      <Header backBttn={false} />
      <LoginForm setUserData={setUserData} />
    </>
  );
};
