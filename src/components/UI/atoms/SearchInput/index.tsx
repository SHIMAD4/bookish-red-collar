import type { FC } from 'react'
import './index.scss'

type SearchInputProps = {
    className: string
}

const SearchInput: FC<SearchInputProps> = ({ className }) => {
    return (
        <input
            className={`searchInput ${className}`}
            type='text'
            placeholder='Поиск'
        />
    )
}

export default SearchInput
