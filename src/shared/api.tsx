import axios from 'axios'

const ApiInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
})

const Books = {
    getBooksByKeyword: (keyword: string) => ApiInstance.get(`?q=${keyword}`),
}

export { Books }
