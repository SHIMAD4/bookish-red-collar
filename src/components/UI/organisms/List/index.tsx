import { useScrollContext } from '@/context/scroll/useScroll'
import type { BookItem } from '@/shared/types'
import { useEffect, useRef, type FC } from 'react'
import Card from '../../molecules/Card'
import './index.scss'

type ListProps = {
    className: string
    items: BookItem[]
}

const List: FC<ListProps> = ({ className, items }) => {
    const { setScrollTop, setScrollHeight } = useScrollContext()
    const listRef = useRef<HTMLUListElement | null>(null)

    useEffect(() => {
        const node = listRef.current
        if (!node || !setScrollTop) return

        const handleScroll = () => {
            setScrollTop(node.scrollTop)
            setScrollHeight(node.scrollHeight)
        }

        node.addEventListener('scroll', handleScroll)

        return () => node.removeEventListener('scroll', handleScroll)
    }, [setScrollHeight, setScrollTop])

    return (
        <ul className={`list ${className}`} ref={listRef}>
            {items && items.length !== 0 ? (
                items.map((item, index) => (
                    <li className='item' key={`${item.id}-${index}`}>
                        <Card
                            coverSrc={
                                item.volumeInfo.imageLinks?.smallThumbnail
                            }
                            title={item.volumeInfo.title}
                            authors={item.volumeInfo.authors}
                            description={item.volumeInfo.description}
                        />
                    </li>
                ))
            ) : (
                <h3>Книги не найдены</h3>
            )}
        </ul>
    )
}

export default List
