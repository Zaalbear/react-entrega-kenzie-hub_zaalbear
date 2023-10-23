import { useContext } from "react";
import { LoginForm } from "../../components/Forms/LoginForm";
import { Header } from "../../components/Header";
import { PageContext } from "../../providers/PageContext";

export const LoginPage = () => {
  const { setUserData } = useContext(PageContext)
  return (
    <>
      <Header backBttn={false} />
      <LoginForm setUserData={setUserData} />
    </>
  );
};
