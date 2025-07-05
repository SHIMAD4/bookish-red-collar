import type { BookItem } from '@/shared/types'
import type { FC } from 'react'
import Card from '../../molecules/Card'
import './index.scss'

type ListProps = {
    items: BookItem[]
}

const List: FC<ListProps> = ({ items }) => {
    return (
        <ul className='list'>
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
