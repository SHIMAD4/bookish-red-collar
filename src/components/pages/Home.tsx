import { useQuery } from '@/context/query/useQuery'
import { InfiniteScrollProvider } from '@/context/scroll/context'
import { useInfiniteScrollContext } from '@/context/scroll/useInfiniteScrollContext'
import { Books } from '@/shared/api'
import type { BookItem, ToolName } from '@/shared/types'
import {
    useEffect,
    useRef,
    useState,
    type Dispatch,
    type SetStateAction,
} from 'react'
import HomeTemplate from '../templates/Home'

const NeededTools: ToolName[] = ['search', 'filter']

const HomePage = () => {
    const { keywords, filter } = useQuery()
    const [books, setBooks] = useState<BookItem[]>([])

    const handleBooks = async (kw: string, ft: string, sIdx: number) => {
        return Books.getBooksByQuery(kw, ft, sIdx * 20).then((res) => {
            const items = res.data.items || []
            setBooks((prev) => [...prev, ...items])

            return items
        })
    }

    return (
        <InfiniteScrollProvider
            fetcher={(startIndex) => handleBooks(keywords, filter, startIndex)}
        >
            <HomePageInner
                keywords={keywords}
                filter={filter}
                books={books}
                setBooks={setBooks}
            />
        </InfiniteScrollProvider>
    )
}

type HomePageInnerProps = {
    keywords: string
    filter: string
    books: BookItem[]
    setBooks: Dispatch<SetStateAction<BookItem[]>>
}

const HomePageInner = ({
    keywords,
    filter,
    books,
    setBooks,
}: HomePageInnerProps) => {
    const isFirstLoad = useRef(true)
    const { reset } = useInfiniteScrollContext()

    useEffect(() => {
        setBooks([])
        isFirstLoad.current = true
        reset()
    }, [keywords, filter, setBooks, reset])

    return <HomeTemplate books={books} tools={NeededTools} />
}

export default HomePage
