import { useQuery } from '@/context/query/useQuery'
import { useDebouncedCallback } from '@/hooks/useDebounce'
import type { ChangeEvent, FC } from 'react'
import './index.scss'

type Props = {
    className: string
}

const SearchInput: FC<Props> = ({ className }) => {
    const { keywords, setKeywords } = useQuery()

    const handleChange = useDebouncedCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setKeywords(e.target.value)
        },
        400,
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
