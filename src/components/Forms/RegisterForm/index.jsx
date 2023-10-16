import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Option } from "../components/Select/Option";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../../schemas/registerSchema";
import { kenzieHubAPI } from "../../services/index.js"
import { useNavigate } from "react-router-dom";

export const RegisterFrom = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }  } = useForm({
    resolver: zodResolver(registerSchema),
 });

 const submit = async (formData) => {
   try {
    const { data } = await kenzieHubAPI.post("/users", formData)
    navigate("/")

    Toastify({
      text: "Conta cadastrada com sucesso!",
      duration: 3000, 
      close: true, 
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }, 
    }).showToast();
  } catch (error) {

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

        <Select {...register("course_module")} id="select">
          <Option value="Primeiro módulo (Introdução ao Frontend)"/>
          <Option value="Segundo módulo (Frontend Avançado)"/>
          <Option value="Terceiro módulo (Introdução ao Backend)"/>
          <Option value="Quarto módulo (Backend Avançado)"/>
        </Select>

        <button>Cadastrar</button>
      </form>
    </main>
  );
};
