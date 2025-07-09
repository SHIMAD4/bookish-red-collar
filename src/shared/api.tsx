import axios from 'axios'

const ApiInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
})

const Books = {
    getBooksByQuery: (
        keywords: string,
        filter?: string,
        startIndex: number = 0,
        maxResults: number = 20,
    ) => {
        if (keywords && filter) {
            return ApiInstance.get(
                `?filter=${filter}&q=${keywords}&startIndex=${startIndex}&maxResults=${maxResults}`,
            )
        }

        return ApiInstance.get(
            `?q=${keywords}&startIndex=${startIndex}&maxResults=${maxResults}`,
        )
    },
}

export { Books }
