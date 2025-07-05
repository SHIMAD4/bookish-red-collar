import type { FC } from 'react'
import './index.scss'

type RowListProps = {
    arr: string[]
}

const RowList: FC<RowListProps> = ({ arr }) => {
    return (
        arr && (
            <ul className='rowList'>
                {arr.map((item, id) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>
        )
    )
}

export default RowList
