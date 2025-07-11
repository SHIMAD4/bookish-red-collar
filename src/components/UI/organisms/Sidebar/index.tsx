import { useCurrentPathMeta } from '@/hooks/useCurrentPathMeta'
import { useTitleByPath } from '@/hooks/useTitleByPath'
import { Pathnames, type ToolName } from '@/shared/types'
import { useNavigate } from 'react-router'
import Tools from '../../molecules/Tools'
import './index.scss'

type SidebarProps = {
    tools?: ToolName[]
}

const Sidebar = ({ tools }: SidebarProps) => {
    // TODO: Пути и тайтлы нужно будет сделать расширяемыми
    const navigate = useNavigate()
    const { path } = useCurrentPathMeta()
    const title = useTitleByPath(
        path === Pathnames.Main ? Pathnames.Favorite : Pathnames.Main,
    )

    const handleClick = () => {
        switch (path) {
            case Pathnames.Main:
                navigate(Pathnames.Favorite)
                break
            case Pathnames.Favorite:
                navigate(Pathnames.Main)
        }
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
