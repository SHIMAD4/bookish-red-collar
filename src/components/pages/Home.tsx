import { useQuery } from '@/context/query/useQuery'
import { useScrollContext } from '@/context/scroll/useScroll'
import { Books } from '@/shared/api'
import type { BookItem, ToolName } from '@/shared/types'
import { useEffect, useRef, useState } from 'react'
import HomeTemplate from '../templates/Home'

const NeededTools: ToolName[] = ['search', 'filter']

const HomePage = () => {
    const { keywords, filter } = useQuery()
    const { scrollTop, scrollHeight, innerHeight } = useScrollContext()

    const [startIndex, setStartIndex] = useState<number>(0)
    const [books, setBooks] = useState<BookItem[]>([])
    const [hasMore, setHasMore] = useState<boolean>(true)

    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const hasRequestedRef = useRef(false)
    const isFirstLoad = useRef(true)

    useEffect(() => {
        setBooks([])
        setStartIndex(0)
        setHasMore(true)
        isFirstLoad.current = true
    }, [keywords, filter])

    useEffect(() => {
        if (!hasMore) return

        Books.getBooksByQuery(keywords, filter, startIndex)
            .then((res) => res.data.items || [])
            .then((data) => {
                if (data.length === 0) {
                    setHasMore(false)
                } else {
                    setBooks((prev) => [...prev, ...data])
                }
                hasRequestedRef.current = false
                isFirstLoad.current = false
            })
            .catch(() => {
                hasRequestedRef.current = false
                isFirstLoad.current = false
            })
    }, [keywords, filter, startIndex, hasMore])

    useEffect(() => {
        if (isFirstLoad.current || !hasMore) return

        const nearBottom = scrollHeight - (scrollTop + innerHeight) < 4000
        if (nearBottom && !hasRequestedRef.current) {
            hasRequestedRef.current = true

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }

            timeoutRef.current = setTimeout(() => {
                setStartIndex((prev) => prev + 20)
            }, 300)
        }
    }, [scrollHeight, scrollTop, innerHeight, hasMore])

    return <HomeTemplate books={books} tools={NeededTools} />
}

export default HomePage
