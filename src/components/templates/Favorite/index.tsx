import Sidebar from '@/components/UI/organisms/Sidebar'
import type { BookItem, ToolName } from '@/shared/types'
import type { FC } from 'react'
import List from '../../UI/organisms/List'
import './index.scss'

type FavoriteTemplateProps = {
    books: BookItem[]
    tools?: ToolName[]
}

const FavoriteTemplate: FC<FavoriteTemplateProps> = ({ books, tools }) => {
    return (
        <div className='wrapper'>
            <Sidebar tools={tools} />
            <List className='favoriteList' items={books} />
        </div>
    )
}

export default FavoriteTemplate
