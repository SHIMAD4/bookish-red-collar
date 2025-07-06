import { useFilter } from '@/context/filter/useFilter'
import { useKeywords } from '@/context/keywords/useKeywords'
import { Books } from '@/shared/api'
import type { BookItem, ToolName } from '@/shared/types'
import { useEffect, useState } from 'react'
import HomeTemplate from '../templates/Home'

const NeededTools: ToolName[] = ['search', 'filter']

const HomePage = () => {
    // TODO: Возможно стоит сделать единый хук useQuery который будет совмещать keywords и filter с возможностью добавлять дополнительные параметры
    const [keywords] = useKeywords()
    const [filter] = useFilter()
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
