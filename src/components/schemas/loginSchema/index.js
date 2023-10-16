import { z } from "zod";

export const loginSchema = z.object({
   email: z.string().min(1, "E-mail é obrigatorio").email("Forneça um e-mail válido"),
   password: z
      .string()
      .min(1, "Digite sua senha")
})