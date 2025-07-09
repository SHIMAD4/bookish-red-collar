import { useContext } from 'react'
import InfiniteScrollContext from './context'

export const useInfiniteScrollContext = () => {
    const ctx = useContext(InfiniteScrollContext)
    if (!ctx)
        throw new Error(
            'useInfiniteScrollContext must be used inside InfiniteScrollProvider',
        )
    return ctx
}
