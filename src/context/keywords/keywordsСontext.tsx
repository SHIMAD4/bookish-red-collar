import { useLocalStorageState } from '@/hooks/useLocalStorage'
import { createContext, type ReactNode } from 'react'

const KeywordsContext = createContext<[string, (val: string) => void]>([
    '',
    () => {},
])

export const KeywordsProvider = ({ children }: { children: ReactNode }) => {
    const keywordsState = useLocalStorageState('keywords', 'JavaScript') as [
        string,
        (val: string) => void,
    ]

    return (
        <KeywordsContext.Provider value={keywordsState}>
            {children}
        </KeywordsContext.Provider>
    )
}

export default KeywordsContext
