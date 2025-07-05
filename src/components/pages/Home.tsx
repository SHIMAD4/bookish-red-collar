import { useKeywords } from '@/context/useKeywords'
import { Books } from '@/shared/api'
import type { BookItem } from '@/shared/types'
import { useEffect, useState } from 'react'
import HomeTemplate from '../templates/Home'

const HomePage = () => {
    const [keywords] = useKeywords()
    const [books, setBooks] = useState<BookItem[]>([])

    useEffect(() => {
        Books.getBooksByKeyword(keywords)
            .then((res) => {
                setBooks(res.data.items)
            })
            .catch(() => setBooks([]))
    }, [keywords])

    return <HomeTemplate books={books} />
}

export default HomePage
