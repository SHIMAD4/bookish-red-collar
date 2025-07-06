import { useLocalStorageState } from '@/hooks/useLocalStorage'
import { createContext, type ReactNode } from 'react'

const FilterContext = createContext<[string, (val: string) => void]>([
    '',
    () => {},
])

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const filterState = useLocalStorageState('filter', 'ebooks') as [
        string,
        (val: string) => void,
    ]

    return (
        <FilterContext.Provider value={filterState}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext
