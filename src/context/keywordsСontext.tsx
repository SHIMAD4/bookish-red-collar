import { useLocalStorageState } from '@/hooks/useLocalStorage'
import { createContext } from 'react'

const KeywordsContext = createContext<[string, (val: string) => void]>([
    '',
    () => {},
])

export const KeywordsProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
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
