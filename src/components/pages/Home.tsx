import { useQuery } from '@/context/query/useQuery'
import { Books } from '@/shared/api'
import type { BookItem, ToolName } from '@/shared/types'
import { useEffect, useState } from 'react'
import HomeTemplate from '../templates/Home'

const NeededTools: ToolName[] = ['search', 'filter']

const HomePage = () => {
    const { keywords, filter } = useQuery()
    const [books, setBooks] = useState<BookItem[]>([])

    useEffect(() => {
        Books.getBooksByQuery(keywords, filter)
            .then((res) => {
                setBooks(res.data.items)
            })
            .catch(() => setBooks([]))
    }, [keywords, filter])

    return <HomeTemplate books={books} tools={NeededTools} />
}

export default HomePage
