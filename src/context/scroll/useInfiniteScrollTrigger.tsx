import { useEffect, useRef, useState } from 'react'

type UseInfiniteScrollTriggerProps = {
    enabled: boolean
    fetch: () => Promise<void>
    root?: HTMLElement | null
    threshold?: number
}

export const useInfiniteScrollTrigger = <T extends HTMLElement>({
    enabled,
    fetch,
    root = null,
    threshold = 1.0,
}: UseInfiniteScrollTriggerProps) => {
    const ref = useRef<T | null>(null)
    const isFetchingRef = useRef(false)
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        if (!enabled || !ref.current) return

        const observer = new IntersectionObserver(
            async ([entry]) => {
                if (entry.isIntersecting && !isFetchingRef.current) {
                    isFetchingRef.current = true
                    setIsFetching(true)

                    try {
                        await fetch()
                    } finally {
                        isFetchingRef.current = false
                        setIsFetching(false)
                    }
                }
            },
            { root, threshold },
        )

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [enabled, fetch, root, threshold])

    return { ref, isFetching }
}
