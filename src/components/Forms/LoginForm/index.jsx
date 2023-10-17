import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";
import { kenzieHubAPI } from "../../services/index.js";

import styles from "./styles.module.scss";

export const LoginForm = ({ setUserData }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const submit = async (formData) => {
    try {
      const { data } = await kenzieHubAPI.post("/sessions", formData);
      localStorage.setItem("@user_token", data.token);
      navigate("/dashboard");
      setUserData(data.user);
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "red",
        },
      }).showToast();
    }
  };
  return (
    <main className={styles.main__container}>
      <form className={styles.from__container} onSubmit={handleSubmit(submit)}>
        <h2 className={`${styles.form__title} title2`}>Login</h2>

        <div className={styles.inputs__container}>
          <Input
            {...register("email")}
            type="text"
            label="Email"
            placeholder="Digite seu E-mail"
            className={styles.input__box}
          />
          {errors.email ? (
            <p className={styles.erro__msg}>{errors.email.message}</p>
          ) : null}

          <Input
            {...register("password")}
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            className={styles.input__box}
          />
          {errors.password ? (
            <p className={styles.erro__msg}>{errors.password.message}</p>
          ) : null}
        </div>

        <button className={`${styles.form__bttn} primary`}>Entrar</button>
      </form>

      <div className={styles.bottomForm__container}>
        <p className={`${styles.bottomForm__text} headline`}>Ainda não possui uma conta?</p>
        <Link className={styles.bottomFormBttn__container} to="/register">
          <button className={`${styles.bottomForm__bttn} disabled`}>Cadastre-se</button>
        </Link>
      </div>
    </main>
  );
};
