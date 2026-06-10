// components/contact-form.tsx
'use client'

import { useFormStatus } from 'react-dom' // Alterado de 'react-dom' para 'react'
// import { sendMessage } from '@/app/actions/contact'
import { useActionState, useEffect } from 'react'
import { Loader2, PhoneCall, Text, UserPenIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { InputWithIcon, TextAreaWithIcon } from '@/components/lib'
import { Button } from '@/components/ui/button'
import { useContatoStore } from '@/stores/useContact'


export const contatoSchema = z.object({
    nome: z.string().min(3, 'O nome deve ter no minímo 3 caracteres'),
    contato: z.string().min(7, "A palavra-passe deve ter no mínimo 7 caracteres."),
    mensagem: z.string()
})

type ContatoTypeValidation = z.infer<typeof contatoSchema>

export default function ContactForm() {
    const { create, loading } = useContatoStore()

    const form = useForm<ContatoTypeValidation>({
        resolver: zodResolver(contatoSchema)
    })

    const onSubmit = form.handleSubmit(async (dataValue) => {
        const id = await create({
            ...dataValue
        })

        if (id) {
            form.setValue('contato', '')
            form.setValue('mensagem', '')
            form.setValue('nome', '')
        }
    })

    return (
        <Form {...form}>
            <form className="space-y-6" onSubmit={onSubmit}>
                <div className="space-y-2">
                    <FormField
                        name='nome'
                        control={form.control}
                        render={(({ field }) => (
                            <FormItem>
                                <FormLabel className='text-muted-foreground'>Nome</FormLabel>
                                <InputWithIcon
                                    not_edit
                                    className=''
                                    icon={UserPenIcon}
                                    {...field}
                                    placeholder='Nome  Apelido'
                                />
                                <FormMessage />
                            </FormItem>
                        ))}
                    />
                </div>

                <div className="space-y-2">
                    <FormField
                        name='contato'
                        control={form.control}
                        render={(({ field }) => (
                            <FormItem>
                                <FormLabel className='text-muted-foreground'>Contato</FormLabel>
                                <InputWithIcon
                                    not_edit
                                    className=''
                                    icon={PhoneCall}
                                    {...field}
                                    placeholder='900 000 000'
                                />
                                <FormDescription>Telefone | Email | WhatsApp</FormDescription>
                                <FormMessage />
                            </FormItem>
                        ))}
                    />
                </div>

                <div className="space-y-2">
                    <FormField
                        name='mensagem'
                        control={form.control}
                        render={(({ field }) => (
                            <FormItem>
                                <FormLabel className='text-muted-foreground'>Mensagem</FormLabel>
                                <TextAreaWithIcon
                                    not_edit
                                    className=''
                                    icon={Text}
                                    {...field}
                                    placeholder='Contato'
                                />
                                <FormDescription>Como lhe podemos ser úteis?</FormDescription>
                                <FormMessage />
                            </FormItem>
                        ))}
                    />
                </div>

                <Button type="submit" className="w-full mt-6 bg-yellow-400 text-black cursor-pointer hover:bg-yellow-300 rounded-xl hover:scale-105 
                hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300" disabled={loading}>
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        'Enviar mensagem'
                    )}
                </Button>
            </form>
        </Form>
    )
}