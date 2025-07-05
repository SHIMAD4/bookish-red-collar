import type { FC } from 'react'
import './index.scss'

type FilterSelectProps = {
    className: string
}

const FilterSelect: FC<FilterSelectProps> = ({ className }) => {
    return (
        <form className={`filterForm ${className}`}>
            <select className='filterSelect' name='filter' id='filter'>
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
