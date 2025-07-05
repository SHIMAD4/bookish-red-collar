import { useKeywords } from '@/context/useKeywords'
import { useDebouncedCallback } from '@/hooks/useDebounce'
import type { ChangeEvent, FC } from 'react'
import './index.scss'

type Props = {
    className: string
}

const SearchInput: FC<Props> = ({ className }) => {
    const [keywords, setKeywords] = useKeywords()

    const handleChange = useDebouncedCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setKeywords(e.target.value)
        },
        300,
    )

    return (
        <input
            type='text'
            className={`searchInput ${className}`}
            placeholder='Поиск'
            defaultValue={keywords}
            onChange={handleChange}
        />
    )
}

export default SearchInput
