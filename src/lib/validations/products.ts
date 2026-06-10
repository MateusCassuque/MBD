import z from "zod";


export const productRegisterSchema = z.object({
    name: z.string().max(35, 'nome grande de mais'),
    price: z.string().max(35, 'nome grande de mais'),
    stock: z.string().max(35, 'nome grande de mais'),
    categoryId: z.string(),
})

export type ProductRegisterType = z.infer<typeof productRegisterSchema>