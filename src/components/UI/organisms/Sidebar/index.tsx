import type { FC } from 'react'
import './index.scss'

// type SidebarProps = {}

const Sidebar: FC = () => {
    return (
        <div className='sidebar'>
            <input className='searchInput' type='text' placeholder='Поиск' />
            <form className='filterForm'>
                <select className='filterSelect' name='filter' id='filter'>
                    <option value='ebooks'>Все книги</option>
                    <option value='free-ebooks'>Бесплатные</option>
                    <option value='full'>Открытые</option>
                    <option value='paid-ebooks'>Платные</option>
                    <option value='partial'>Превью</option>
                </select>
            </form>
        </div>
    )
}

export default Sidebar
