

export const useAPI = {
    get: async (url: string) => {
        const get = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (get.ok) {
            console.log('sucesso✅')
            const response = await get.json()
            return { response }
        } else {
            const { error } = await get.json()
            console.log('erro❌' + JSON.stringify(error))
            return { status: get.status, message: error?.message }
        }
    },

    post: async (url: string, data: any) => {
        const get = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })

        if (get.ok) {
            console.log('sucesso✅')
            const response = await get.json()
            return response
        } else {
            const { error } = await get.json()
            console.log('erro❌' + JSON.stringify(error))
            return { status: get.status, message: error?.message }
        }
        // `${get.status == 404 ? 'Rota não encontrado ❌' : get.status == 401 ? 'Não autorizado ❌' : get.statusText}`
    },

    put: async (url: string, data: any) => {
        const get = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })

        if (get.ok) {
            console.log('sucesso✅')
            const response = await get.json()
            return response
        } else {
            const { error } = await get.json()
            console.log('erro❌' + JSON.stringify(error))
            return { status: get.status, message: error?.message }
        }
        // `${get.status == 404 ? 'Rota não encontrado ❌' : get.status == 401 ? 'Não autorizado ❌' : get.statusText}`
    },

    delete: async (url: string, data: any) => {
        const get = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })

        if (get.ok) {
            console.log('sucesso✅')
            const response = await get.json()
            return response
        } else {
            const { error } = await get.json()
            console.log('erro❌' + JSON.stringify(error))
            return { status: get.status, message: error?.message }
        }
        // `${get.status == 404 ? 'Rota não encontrado ❌' : get.status == 401 ? 'Não autorizado ❌' : get.statusText}`
    }
}
