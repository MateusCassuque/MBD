// import { UserRole } from "@prisma/client"
import { formatCurrency, formatDate, formatDateNotTime } from "../utils"



export function transformOrders(orders: any[]) {
    return orders.map(or => ({
        ID: `${or.id}`.substring(0, 8),
        Cliente: or.customer.name || '-',
        telefone: or.customer?.user?.telefone,
        Produtos: or.items.map((e: any) => { return `${e.quantity} - ${e.product?.name}` }),
        Horário: formatDate(or.delivery?.startedAt || '-'),
        Local: or.deliveryAddress || '-',
        Total: or.total,
    }))
}

export function transformProducts(products: any[]) {
    return products.map(p => ({
        ID: `${p.id}`.substring(0, 8),
        Nome: p.name,
        Preço: p.price,
        quantidade: p.stock,
        Categoria: p.category?.name || '-',
        CriadoEm: new Date(p.createdAt).toLocaleDateString()
    }))
}

export function transformTransactions(transactions: any[]) {
    return transactions.map(tx => ({
        Data: formatDate(tx.createdAt),
        Valor: tx.amount,
        Categória: tx.category,
        Tipo: tx.type,
        Status: tx.status || '-',
        Descrição: tx.description
    }))
}

export function transformExpenses(expenses: any[]) {
    return expenses.map(tx => ({
        Data: formatDate(tx.createdAt),
        Valor: formatCurrency(tx.amount),
        Categória: tx.category,
        Descrição: tx.note
    }))
}

export function transformPeaple(peaple: any[]) {
    return peaple.map(ply => ({
        Data: formatDateNotTime(ply.createdAt),
        nome: ply.name,
        email: ply.email,
        Telefone: ply.telefone,
        status: ply.status,
     /*   Tipo: ply.role === 'STORE_OWNER' ? 'Gerente'
            : ply.role === 'CUSTOMER' ? 'Cliente'
                : ply.role === 'DELIVERY' ? 'Entragador'
                    : 'Staff' as UserRole,*/
    }))
}

export function transformPayments(payments: any[]) {
    return payments.map(tx => ({
        Data: formatDate(tx.createdAt),
        Valor: formatCurrency(tx.amount),
        Loja: tx.store.name,
        Status: tx.status || '-',
    }))
}

export function transformLoja(stores: any[]) {
    return stores.map(str => ({
        Data: formatDate(str.createdAt),
        nome: str.name,
        telefone: str.telefone,
        Status: str.isActive ? 'Activo' : 'Suspenso',
        Válido_Até: formatDate(str.subscriptions.currentPeriodEnd),
    }))
}
