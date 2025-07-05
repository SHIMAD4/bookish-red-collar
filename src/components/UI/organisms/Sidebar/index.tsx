import type { ToolName } from '@/shared/types'
import type { FC } from 'react'
import Tools from '../../molecules/Tools'
import './index.scss'

type SidebarProps = {
    tools: ToolName[]
}

const Sidebar: FC<SidebarProps> = ({ tools }) => {
    return (
        <div className='sidebar'>
            <Tools whichTools={tools} />
        </div>
    )
}

export default Sidebar
