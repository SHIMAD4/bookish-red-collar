import { useQuery } from '@/context/query/useQuery'
import type { ChangeEvent, FC } from 'react'
import './index.scss'

type FilterSelectProps = {
    className: string
}

const FilterSelect: FC<FilterSelectProps> = ({ className }) => {
    const { filter, setFilter } = useQuery()

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value)
    }

    return (
        <form className={`filterForm ${className}`}>
            <select
                className='filterSelect'
                name='filter'
                id='filter'
                onChange={handleChange}
                defaultValue={filter}
            >
                <option value='ebooks'>Все книги</option>
                <option value='free-ebooks'>Бесплатные</option>
                <option value='full'>Открытые</option>
                <option value='paid-ebooks'>Платные</option>
                <option value='partial'>Превью</option>
            </select>
        </form>
    )
}

export default FilterSelect
