import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Options } from "../components/Select/Options";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../../schemas/registerSchema";

export const RegisterFrom = () => {
  const { register, handleSubmit, formState: { errors }  } = useForm({
    resolver: zodResolver(registerSchema),
 });

 const submit = (formData) => {
  console.log(formData)
 }

  return (
    <main>
      <div>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa!</p>
      </div>

      <form onSubmit={handleSubmit(submit)}>
        <Input
          {...register("name")}
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
        />
        {errors.name ? <p>{errors.name.message}</p> : null}

        <Input
          {...register("email")}
          label="E-mail"
          type="email"
          placeholder="Digite aqui seu email"
        />
        {errors.email ? <p>{errors.email.message}</p> : null}

        <Input
          {...register("password")}
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
        />
        {errors.password ? <p>{errors.password.message}</p> : null}

        <Input
          {...register("confirmPassword")}
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme aqui sua senha"
        />
        {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null}

        <Input
          {...register("bio")}
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
        />
        {errors.bio ? <p>{errors.bio.message}</p> : null}

        <Input
          {...register("contact")}
          label="Contato"
          type="text"
          placeholder="Opção de contato"
        />
        {errors.contact ? <p>{errors.contact.message}</p> : null}

        <Select name="module" id="select">
          <Options value="module1" name="Primeiro Módulo" />
          <Options value="module2" name="Segundo Módulo" />
          <Options value="module3" name="Terceiro Módulo" />
          <Options value="module4" name="Quarto Módulo" />
          <Options value="module5" name="Quinto Módulo" />
          <Options value="module6" name="Sexto Módulo" />
        </Select>

        <button>Cadastrar</button>
      </form>
    </main>
  );
};
