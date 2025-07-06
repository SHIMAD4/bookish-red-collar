import { useLocalStorageState } from '@/hooks/useLocalStorage'
import { createContext, useMemo, type ReactNode } from 'react'

type QueryState = {
    keywords: string
    setKeywords: (val: string) => void
    filter: string
    setFilter: (val: string) => void
}

const defaultValue: QueryState = {
    keywords: '',
    setKeywords: () => {},
    filter: '',
    setFilter: () => {},
}

const QueryContext = createContext<QueryState>(defaultValue)

export const QueryProvider = ({ children }: { children: ReactNode }) => {
    const [keywords, setKeywords] = useLocalStorageState<string>(
        'keywords',
        'JavaScript',
    )
    const [filter, setFilter] = useLocalStorageState('filter', 'ebooks')

    const value = useMemo(
        () => ({
            keywords,
            setKeywords,
            filter,
            setFilter,
        }),
        [keywords, setKeywords, filter, setFilter],
    )

    return (
        <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
    )
}

export default QueryContext
