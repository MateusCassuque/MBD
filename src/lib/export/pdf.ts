
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export function exportToPDF(data: any[], filename = 'export.pdf') {
    const doc = new jsPDF()

    const headers = [Object.keys(data[0])]
    const rows = data.map(obj => Object.values(obj))

    autoTable(doc, {
        head: headers,
        body: rows as any
    })

    doc.save(filename)
}
