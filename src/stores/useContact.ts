// import { ContatoDelete, ContatoIndex, ContatoReade, ContatoShow, ContatoStore, ContatoUnReade } from "@/db"
import { IContato } from "@/types/contact"
import { toast } from "sonner"
import { create } from "zustand"
import axios from 'axios'



interface IContatoStore {
  Internalloading: boolean
  loading: boolean
  currentContato: IContato | undefined
  contatos: IContato[]
  create: (contatoData: Omit<IContato, 'id'>) => Promise<void | string>
  AsRead: (id: string) => Promise<void>
  UnRead: (id: string) => Promise<void>
  deleteMessage: (id: string) => Promise<void>
  fetch: () => Promise<void>
  fetchMessageById: (id: string) => Promise<void>
}

export const useContatoStore = create<IContatoStore>((set) => ({
  currentContato: undefined,
  contatos: [],
  loading: false,
  Internalloading: false,

  create: async (contatoData) => {
    try {
      set({ loading: true })
      const novoContato = await axios.post('http://localhost:3001/api/contact', {
        nome: contatoData.nome,
        mensagem: contatoData.mensagem,
        contato: contatoData.contato,
        tenantid: 'cmom78og40004jo048aho0zpo'

      })

      if (novoContato.data.success) {
        set((state) => ({ contatos: [novoContato.data.data, ...state.contatos] }))
        toast.success(`Mensagem enviada com sucesso ${novoContato.data.data.nome} 😎`)
        return novoContato.data.data.id
      }

      toast.error(`Erro ao enviar a mensagem, tente mais tarde😥`)
      return
    } catch (error) {
      toast.error(`Erro de conexão, tente mais tarde😥`)
      return
    } finally {
      set({ loading: false })
    }
  },


  fetch: async () => {
    try {
      set({ loading: true })
      // const mensagens = await ContatoIndex()

      // if (!(mensagens instanceof Error)) {
      //   set({ contatos: mensagens })
      //   return
      // }

      return
    } catch (error) {
      toast.error(`Erro de conexão, tente mais tarde😥`)
      return
    } finally {
      set({ loading: false })
    }
  },

  fetchMessageById: async (id) => {
    try {
      // set({ Internalloading: true })
      // const mensagens = await ContatoShow(id)

      // if (!(mensagens instanceof Error)) {
      //   set({ currentContato: mensagens })
      //   return
      // }

      return
    } catch (error) {
      toast.error(`Erro de conexão, tente mais tarde😥`)
      return
    } finally {
      set({ Internalloading: false })
    }
  },

  AsRead: async (id) => {
    try {
      set({ Internalloading: true })
      // const mensagemId = await ContatoReade(id)

      // if (!(mensagemId instanceof Error)) {
      //   toast.success(`✔ Mensagem aberta!`)
      //   return
      // }

      return
    } catch (error) {
      toast.error(`Erro de conexão, tente mais tarde😥`)
      return
    } finally {
      set({ Internalloading: false })
    }
  },

  UnRead: async (id) => {
    try {
      set({ Internalloading: true })
      // const mensagemId = await ContatoUnReade(id)

      // if (!(mensagemId instanceof Error)) {
      //   toast.success(`✔ Mensagem marcada como não lida com sucesso!`)
      //   return
      // }

      return
    } catch (error) {
      toast.error(`Erro de conexão, tente mais tarde😥`)
      return
    } finally {
      set({ Internalloading: false })
    }
  },

  deleteMessage: async (id) => {
    try {
      // set({ Internalloading: true })
      // const mensagemId = await ContatoDelete(id)

      // if (!(mensagemId instanceof Error)) {
      //   toast.success(`✔ Eliminada com sucesso`)
      //   return
      // }

      return
    } catch (error) {
      toast.error(`Erro de conexão, tente mais tarde😥`)
      return
    } finally {
      set({ Internalloading: false })
    }
  },
}))