import z from "zod";


export const categoryRegisterSchema = z.object({
    name: z.string().max(25, 'nome grande de mais'),
})

export type CategoryRegisterType = z.infer<typeof categoryRegisterSchema>