import Sidebar from '@/components/UI/organisms/Sidebar'
import type { BookItem, ToolName } from '@/shared/types'
import type { FC } from 'react'
import List from '../../UI/organisms/List'
import './index.scss'

type HomeTemplateProps = {
    books: BookItem[]
    tools: ToolName[]
}

const HomeTemplate: FC<HomeTemplateProps> = ({ books, tools }) => {
    return (
        <div className='wrapper'>
            <Sidebar tools={tools} />
            <List className='mainList' items={books} />
        </div>
    )
}

export default HomeTemplate
