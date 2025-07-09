import {
    createContext,
    useCallback,
    useRef,
    useState,
    type ReactNode,
} from 'react'

type InfiniteScrollState = {
    hasMore: boolean
    isFetching: boolean
    loadMore: () => Promise<void>
    reset: () => void
}

const InfiniteScrollContext = createContext<InfiniteScrollState | null>(null)

export const InfiniteScrollProvider = ({
    children,
    fetcher,
}: {
    children: ReactNode
    fetcher: (page: number) => Promise<[]>
}) => {
    const [page, setPage] = useState(0)
    const [isFetching, setIsFetching] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const isFirstLoad = useRef(true)

    const loadMore = useCallback(async () => {
        if (isFetching || !hasMore) return

        setIsFetching(true)

        try {
            const data = await fetcher(page)

            if (!data || data.length === 0) {
                setHasMore(false)
            } else {
                setPage((prev) => prev + 1)
            }
        } finally {
            setIsFetching(false)
            isFirstLoad.current = false
        }
    }, [fetcher, page, hasMore, isFetching])

    const reset = useCallback(() => {
        setPage(0)
        setHasMore(true)
    }, [])

    return (
        <InfiniteScrollContext.Provider
            value={{ hasMore, isFetching, loadMore, reset }}
        >
            {children}
        </InfiniteScrollContext.Provider>
    )
}

export default InfiniteScrollContext
