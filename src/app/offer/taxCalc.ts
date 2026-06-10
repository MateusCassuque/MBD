import { Answers } from "@/stores/lead-store"

export type Result = {
    score: number
    level: "Baixo" | "Médio" | "Alto"
    message: string
}

export function calculateVisaApprovalScore(answers: Answers): Result {
    let score = 50

    // País
    if (["Portugal", "Alemanha"].includes(answers?.country || '')) score += 10
    else if (["França", "Espanha"].includes(answers?.country || '')) score += 5
    else if (answers.country === "Brasil") score += 7
    else if (answers.country === "África do Sul") score += 6

    // Tipo de visto
    if (answers.visaType === "Turismo") score += 5
    else if (answers.visaType === "Estudo") score += 10
    else if (answers.visaType === "Trabalho") score += 7
    else if (answers.visaType === "Procura de trabalho") score += 3

    // Histórico de recusa
    if (answers.deniedBefore === "Sim") score -= 15
    else score += 10

    // Tempo de viagem
    if (answers.travelDate === "Urgente (0-30 dias)") score -= 10
    else if (answers.travelDate === "1-3 meses") score += 5
    else if (answers.travelDate === "3-6 meses") score += 10
    else if (answers.travelDate === "Ainda não sei") score -= 5

    // Documentação
    if (answers.documentsReady === "Sim") score += 15
    else if (answers.documentsReady === "Alguns") score += 5
    else score -= 10

    // Limitar entre 0 e 100
    score = Math.max(0, Math.min(100, score))

    // Classificação
    let level: Result["level"]
    let message: string

    if (score <= 49) {
        level = "Baixo"
        message = "Com base nas tuas respostas, O seu perfil tem baixo nível de aprovação. Recomendamos uma consultoria para evitar recusa."
    } else if (score <= 74) {
        level = "Médio"
        message = "Com base nas tuas respostas, O seu perfil tem boas chances, mas pode ser melhorado para aumentar a aprovação, Recomendamos acompanhamento profissional para evitar rejeição."
    } else {
        level = "Alto"
        message = "Excelente! O seu perfil tem alta probabilidade de aprovação, Recomendamos acompanhamento profissional para evitar rejeição."
    }
    return {
        score,
        level,
        message
    }
}