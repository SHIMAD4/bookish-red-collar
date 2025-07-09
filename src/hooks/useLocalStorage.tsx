import { useState } from 'react'

export function useLocalStorageState<T>(
    key: string,
    initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
    const getStored = (): T => {
        try {
            const item = localStorage.getItem(key)

            return item ? JSON.parse(item) : initialValue
        } catch {
            return initialValue
        }
    }

    const [state, setState] = useState<T>(getStored)

    const setValue = (value: T | ((prev: T) => T)) => {
        const prev = getStored()
        const newValue =
            typeof value === 'function'
                ? (value as (prev: T) => T)(prev)
                : value

        try {
            localStorage.setItem(key, JSON.stringify(newValue))

            setState(newValue)
        } catch (e) {
            console.error(`Error writing to localStorage[${key}]`, e)
        }
    }

    return [state, setValue]
}
