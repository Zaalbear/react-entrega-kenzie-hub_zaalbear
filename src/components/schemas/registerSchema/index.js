import { z } from "zod";

export const registerSchema = z.object({
   name: z.string().min(1, "Nome é obrigatório"),
   email: z.string().min(1, "E-mail é obrigatorio").email("Forneça um e-mail válido"),
   password: z
      .string()
      .min(8, "É necessário pelo menos oito caracteres.")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
   confirmPassword: z.string().min(1, "É necessário confirmar a senha"),
   bio: z.string().min(1, "Esse campo é obrigatório"),
   contact: z.string().min(1, "Esse campo é obrigatório"),
   course_module: z.string()
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
});