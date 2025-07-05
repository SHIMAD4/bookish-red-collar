import { Books } from '@/shared/api'
import { useEffect, useState } from 'react'

const useBooks = (keyword: string) => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        Books.getBooksByKeyword(keyword)
            .then((response) => {
                setBooks(response.data.items || [])
            })
            .catch((error) => {
                console.error('Error fetching books:', error)
                setBooks([])
            })
    }, [keyword])

    return books
}

export default useBooks
