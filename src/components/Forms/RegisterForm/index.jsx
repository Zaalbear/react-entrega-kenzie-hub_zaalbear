import { Input } from "../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schemas/registerSchema/index.js";
import { useContext } from "react";
import { PageContext } from "../../../providers/PageContext";
import styles from "./styles.module.scss";


export const RegisterFrom = () => {
  const { registerSubmit } = useContext(PageContext)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  return (
    <main className={styles.main__container}>
      <div className={styles.formHeader__container}>
        <h2 className={`${styles.form__title} title2`}>Crie sua conta</h2>
        <p className={`${styles.form__text} headline`}>Rápido e grátis, vamos nessa!</p>
      </div>

      <form className={styles.from__container} onSubmit={handleSubmit(registerSubmit)}>
        <Input
          {...register("name")}
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          className={styles.input__box}
        />
        {errors.name ? <p className={styles.erro__msg}>{errors.name.message}</p> : null}

        <Input
          {...register("email")}
          label="E-mail"
          type="email"
          placeholder="Digite aqui seu email"
          className={styles.input__box}
        />
        {errors.email ? <p className={styles.erro__msg}>{errors.email.message}</p> : null}

        <Input
          {...register("password")}
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          className={styles.input__box}
        />
        {errors.password ? <p className={styles.erro__msg}>{errors.password.message}</p> : null}

        <Input
          {...register("confirmPassword")}
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme aqui sua senha"
          className={styles.input__box}
        />
        {errors.confirmPassword ? <p className={styles.erro__msg}>{errors.confirmPassword.message}</p> : null}

        <Input
          {...register("bio")}
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          className={styles.input__box}
        />
        {errors.bio ? <p className={styles.erro__msg}>{errors.bio.message}</p> : null}

        <Input
          {...register("contact")}
          label="Contato"
          type="text"
          placeholder="Opção de contato"
          className={styles.input__box}
        />
        {errors.contact ? <p className={styles.erro__msg}>{errors.contact.message}</p> : null}

        <div className={styles.select__container}>
              <label className={`${styles.select__label} headline`}>
                Selecionar Modulo
              </label>
              <select
                className={styles.select__box}
                {...register("status")}
                id="statusSelect"
              >
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
              </select>
        </div>

        <button className={`${styles.form__bttn} primary negative`}>Cadastrar</button>
      </form>
    </main>
  );
};
