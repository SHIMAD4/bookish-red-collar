import { createContext, useMemo, useState, type ReactNode } from 'react'

type ScrollState = {
    scrollTop: number
    setScrollTop: (val: number) => void
    scrollHeight: number
    setScrollHeight: (val: number) => void
    innerHeight: number
}

const defaultValue: ScrollState = {
    scrollTop: 0,
    setScrollTop: () => {},
    scrollHeight: 0,
    setScrollHeight: () => {},
    innerHeight: 0,
}

const ScrollContext = createContext<ScrollState>(defaultValue)

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const [scrollTop, setScrollTop] = useState(0)
    const [scrollHeight, setScrollHeight] = useState(0)
    const innerHeight = window.innerHeight

    const value = useMemo(
        () => ({
            scrollTop,
            setScrollTop,
            scrollHeight,
            setScrollHeight,
            innerHeight,
        }),
        [innerHeight, scrollHeight, scrollTop],
    )

    return (
        <ScrollContext.Provider value={value}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollContext
