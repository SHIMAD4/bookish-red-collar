import type { ToolName } from '@/shared/types'
import type { FC, JSX } from 'react'
import FilterSelect from '../../atoms/FilterSelect'
import SearchInput from '../../atoms/SearchInput'
import './index.scss'

type ToolsProps = {
    whichTools: ToolName[]
}

const toolComponents: Record<ToolName, JSX.Element> = {
    search: <SearchInput className='tool' />,
    filter: <FilterSelect className='tool' />,
}

const Tools: FC<ToolsProps> = ({ whichTools }) => {
    return whichTools.map((tool) => (
        <div className='tool' key={tool}>
            {toolComponents[tool]}
        </div>
    ))
}

export default Tools
