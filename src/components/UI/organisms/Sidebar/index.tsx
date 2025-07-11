import { useCurrentPathMeta } from '@/hooks/useCurrentPathMeta'
import { Pathnames, type ToolName } from '@/shared/types'
import { useNavigate } from 'react-router'
import Tools from '../../molecules/Tools'
import './index.scss'

type SidebarProps = {
    tools?: ToolName[]
}

const Sidebar = ({ tools }: SidebarProps) => {
    const navigate = useNavigate()
    const { path, title } = useCurrentPathMeta()

    const handleClick = () => {
        navigate(path === Pathnames.Main ? Pathnames.Favorite : Pathnames.Main)
    }

    return (
        <div className='sidebar'>
            {tools && <Tools whichTools={tools} />}
            <button className='sidebar__toggle-button' onClick={handleClick}>
                {title}
            </button>
        </div>
    )
}

export default Sidebar
