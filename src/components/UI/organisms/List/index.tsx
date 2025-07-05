import type { BookItem } from '@/shared/types'
import type { FC } from 'react'
import Card from '../../molecules/Card'
import './index.scss'

type ListProps = {
    className: string
    items: BookItem[]
}

const List: FC<ListProps> = ({ className, items }) => {
    return (
        <ul className={`list ${className}`}>
            {items.map((item) => (
                <li className='item' key={item.id}>
                    <Card
                        coverSrc={item.volumeInfo.imageLinks?.smallThumbnail}
                        title={item.volumeInfo.title}
                        authors={item.volumeInfo.authors}
                        description={item.volumeInfo.description}
                    />
                </li>
            ))}
        </ul>
    )
}

export default List
