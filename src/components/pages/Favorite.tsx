import { useQuery } from '@/context/query/useQuery'
import { InfiniteScrollProvider } from '@/context/scroll/context'
import { useInfiniteScrollContext } from '@/context/scroll/useInfiniteScrollContext'
import type { BookItem } from '@/shared/types'
import { useEffect, useRef, useState, type FC } from 'react'
import HomeTemplate from '../templates/Home'

const FavoritePage = () => {
    const { keywords, filter } = useQuery()
    const [books, setBooks] = useState<BookItem[]>([])

    const handleBooks = async () => {
        console.log('Favorite page')
    }

    return (
        <InfiniteScrollProvider fetcher={() => handleBooks()}>
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
    setBooks: (arr: []) => void
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

    return <HomeTemplate books={books} />
}

export default FavoritePage
