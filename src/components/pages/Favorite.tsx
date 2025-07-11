import { useQuery } from '@/context/query/useQuery'
import { InfiniteScrollProvider } from '@/context/scroll/context'
import { useInfiniteScrollContext } from '@/context/scroll/useInfiniteScrollContext'
import { useLocalStorageState } from '@/hooks/useLocalStorageState'
import { Books } from '@/shared/api'
import type { BookItem } from '@/shared/types'
import { useEffect, useRef, useState, type FC } from 'react'
import FavoriteTemplate from '../templates/Favorite'

const FavoritePage = () => {
    const { keywords, filter } = useQuery()
    const [books, setBooks] = useState<BookItem[]>([])
    const [booksId] = useLocalStorageState<string[]>('favorite', [])
    const loadedIdsRef = useRef<Set<string>>(new Set())

    const handleBooks = async (): Promise<BookItem[]> => {
        if (!booksId?.length) return []

        const idsToLoad = booksId.filter((id) => !loadedIdsRef.current.has(id))

        if (idsToLoad.length === 0) return []

        const results = await Promise.all(
            idsToLoad.map(async (id) => {
                try {
                    const res = await Books.getBookById(id)

                    loadedIdsRef.current.add(id)
                    return res.data
                } catch {
                    return null
                }
            }),
        )

        const flatBooks = results.filter(Boolean) as BookItem[]

        setBooks((prev) => [...prev, ...flatBooks])

        return flatBooks
    }

    return (
        <InfiniteScrollProvider fetcher={handleBooks}>
            <FavoritePageInner
                keywords={keywords}
                filter={filter}
                books={books}
                setBooks={setBooks}
            />
        </InfiniteScrollProvider>
    )
}

type FavoritePageInnerProps = {
    keywords: string
    filter: string
    books: BookItem[]
    setBooks: (arr: BookItem[]) => void
}

const FavoritePageInner: FC<FavoritePageInnerProps> = ({
    keywords,
    filter,
    books,
    setBooks,
}) => {
    const isFirstLoad = useRef(true)
    const { reset } = useInfiniteScrollContext()

    useEffect(() => {
        setBooks([])
        isFirstLoad.current = true
        reset()
    }, [keywords, filter, setBooks, reset])

    return <FavoriteTemplate books={books} />
}

export default FavoritePage
