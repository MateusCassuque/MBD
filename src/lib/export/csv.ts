export function exportToCSV(data: any[], filename = 'export.csv') {
    const headers = Object.keys(data[0]).join(',')
    const rows = data.map(obj =>
        Object.values(obj).join(',')
    )

    const csvContent = [headers, ...rows].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
  }