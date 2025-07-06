import axios from 'axios'

const ApiInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
})

const Books = {
    getBooksByQuery: (keywords: string, filter?: string) => {
        if (keywords && filter) {
            return ApiInstance.get(`?filter=${filter}&q=${keywords}`)
        }

        return ApiInstance.get(`?q=${keywords}`)
    },
}

export { Books }
