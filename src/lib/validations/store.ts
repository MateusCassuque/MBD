import z from "zod";


export const storeRegisterSchema = z.object({
    name: z.string().max(100, 'maxímo 100 caracteres').min(3, "Pelo menos 3 caracteres"),
    description: z.string().max(500, 'maxímo 100 caracteres').min(3, "Pelo menos 3 caracteres")
})

export type storeRegisterType = z.infer<typeof storeRegisterSchema>