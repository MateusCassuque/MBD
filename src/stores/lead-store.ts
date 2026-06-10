import { Result } from "@/app/offer/taxCalc"
import { create } from "zustand"

// type Lead = {
//   country?: string
//   visaType?: string
//   deniedBefore?: boolean
//   travelDate?: string
//   documentsReady?: boolean
//   status: LeadStatus
// }

export interface Answers {
    country?: string
    visaType?: string
    deniedBefore?: "Sim" | "Não"
    travelDate?: string
    documentsReady?: "Sim" | "Alguns" | "Não"
    status?: "cold" | "warm" | "hot"
}


interface LeadStore {
    lead?: Answers
    result?: Result
    plan?: {
        name: string,
        price: string
    }
    setResult: (data: Result) => void
    setPlan: (data: LeadStore["plan"]) => void
    setLead: (data: Partial<Answers>) => void
    reset: () => void
}

export const useLeadStore = create<LeadStore>((set) => ({
    lead: { status: 'cold' },

    setLead: (data) => {
        set((state) => ({
            lead: { ...state.lead, ...data },
        }))
    },

    setResult: (data) => {
        set({ result: data, })
    },

    setPlan: (data) => {
        set({ plan: data, })
    },

    reset: () =>
        set({
            lead: { status: "cold" },
        }),
}))