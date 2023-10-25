import { Link } from "react-router-dom";
import { Input } from "../components/Input";

import styles from "./styles.module.scss";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PageContext } from "../../../providers/PageContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema/index.js";


export const LoginForm = () => {
  const { loginSubmit } = useContext(PageContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  
  return (
    <main className={styles.main__container}>
      <form className={styles.from__container} onSubmit={handleSubmit(loginSubmit)}>
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
