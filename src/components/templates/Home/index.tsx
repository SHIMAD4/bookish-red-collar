import type { BookItem } from '@/shared/types'
import type { FC } from 'react'
import List from '../../UI/organisms/List'
import './index.scss'

type HomeTemplate = {
    books: BookItem[]
}

const HomeTemplate: FC<HomeTemplate> = ({ books }) => {
    return (
        <div className='wrapper'>
            <List items={books} />
        </div>
    )
}

export default HomeTemplate
