import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";
import { kenzieHubAPI } from "../../services/index.js";

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
      console.log(data);
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
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <h2>Login</h2>
      </div>

      <Input
        {...register("email")}
        type="text"
        label="Email"
        placeholder="Digite seu E-mail"
      />
      {errors.email ? <p>{errors.email.message}</p> : null}

      <Input
        {...register("password")}
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
      />
      {errors.password ? <p>{errors.password.message}</p> : null}

      <button>Entrar</button>
    </form>
  );
};
