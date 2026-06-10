import { exportToCSV } from "@/lib/export/csv"
import { exportToExcel } from "@/lib/export/excel"
import { exportToPDF } from "@/lib/export/pdf"
import {
    transformExpenses,
    transformLoja,
    transformOrders,
    transformPayments,
    transformPeaple,
    transformProducts,
    transformTransactions
} from "@/lib/transform"

export async function handleExport(
    type: 'csv' | 'excel' | 'pdf',
    category: 'product' | 'order' | 'transactions' | 'expenses' | 'peaple' | 'payments' | 'store',
    dataSend: any[]) {
    const data = category === 'product' ? transformProducts(dataSend)
        : category === 'order' ? transformOrders(dataSend)
            : category === 'transactions' ? transformTransactions(dataSend)
                : category === 'expenses' ? transformExpenses(dataSend)
                    : category === 'peaple' ? transformPeaple(dataSend)
                        : category === 'payments' ? transformPayments(dataSend)
                            : transformLoja(dataSend)

    if (!data.length) return

    switch (type) {
        case 'csv':
            exportToCSV(data, 'produtos.csv')
            break
        case 'excel':
            exportToExcel(data, 'produtos.xlsx')
            break
        case 'pdf':
            exportToPDF(data, 'produtos.pdf')
            break
    }
}