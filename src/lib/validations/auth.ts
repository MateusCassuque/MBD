// lib/validations/auth.ts
/* import { UserRole } from "@prisma/client"
import { z } from "zod"


export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z
    .string()
    .min(8, "A palavra-passe deve ter no mínimo 8 caracteres.")
    .regex(/[A-Z]/, "Deve conter pelo menos uma letra maiúscula.")
    .regex(/[a-z]/, "Deve conter pelo menos uma letra minúscula.")
    .regex(/[0-9]/, "Deve conter pelo menos um número.")
    .regex(/[^A-Za-z0-9]/, "Deve conter pelo menos um caractere especial."),
})

export const registerSchema = loginSchema.extend({
  name: z.string().max(100, 'O Nome deve conter no maxímo 100 caracteres').min(3, "O Nome deve ter pelo menos 3 caracteres"),
  terms: z.boolean(),
  role: z.enum(["ADMIN", "STORE_OWNER", "STORE_STAFF", "DELIVERY", "CUSTOMER"], {
    errorMap: () => ({ message: "Selecione um perfil." }),
  }),
}) */