import { useInfiniteScrollContext } from '@/context/scroll/useInfiniteScrollContext'
import { useInfiniteScrollTrigger } from '@/context/scroll/useInfiniteScrollTrigger'
import type { BookItem } from '@/shared/types'
import { useCallback, useState, type FC } from 'react'
import Card from '../../molecules/Card'
import './index.scss'

type ListProps = {
    className: string
    items: BookItem[]
}

const List: FC<ListProps> = ({ className, items }) => {
    const [scrollRoot, setScrollRoot] = useState<HTMLElement | null>(null)
    const { hasMore, loadMore } = useInfiniteScrollContext()

    const listRef = useCallback((node: HTMLUListElement | null) => {
        if (node) setScrollRoot(node)
    }, [])

    const { ref: bottomRef, isFetching } =
        useInfiniteScrollTrigger<HTMLLIElement>({
            enabled: hasMore,
            fetch: loadMore,
            root: scrollRoot,
            threshold: 1.0,
        })

    return (
        <ul className={`list ${className}`} ref={listRef}>
            {items.map((item, index) => (
                <li className='item' key={`${item.id}-${index}`}>
                    <Card
                        coverSrc={item.volumeInfo.imageLinks?.smallThumbnail}
                        title={item.volumeInfo.title}
                        authors={item.volumeInfo.authors}
                        description={item.volumeInfo.description}
                    />
                </li>
            ))}
            {isFetching && <li className='loader'>Загрузка...</li>}
            {!isFetching && items.length === 0 && (
                <li className='fetchError'>Книги не найдены</li>
            )}
            <li ref={bottomRef} style={{ height: 1 }} />
        </ul>
    )
}

export default List
