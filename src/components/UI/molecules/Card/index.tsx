import { useLocalStorageState } from '@/hooks/useLocalStorageState'
import type { FC } from 'react'
import { Link } from 'react-router'
import CardCover from '../../atoms/CardCover'
import RowList from '../../atoms/RowList'
import './index.scss'

type CardProps = {
    coverSrc?: string
    title: string
    authors: string[]
    description: string
    bookId: string
}

const Card: FC<CardProps> = ({
    coverSrc,
    title,
    authors,
    description,
    bookId,
}) => {
    const [favorite, setFavorite] = useLocalStorageState<string[]>(
        'favorite',
        [],
    )

    const isFavorite = favorite.includes(bookId)

    const toggleFavorite = () => {
        setFavorite((prev) =>
            prev.includes(bookId)
                ? prev.filter((id) => id !== bookId)
                : [...prev, bookId],
        )
    }

    return (
        <Link to={`${bookId}`} className='card'>
            <CardCover src={coverSrc} />
            <div className='info'>
                <h2 className='title'>{title}</h2>
                <RowList arr={authors} />
                {description && <p className='description'>{description}</p>}
            </div>
            <button
                className={`favorite ${isFavorite ? 'active' : ''}`}
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    toggleFavorite()
                }}
            >
                <svg
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    fill={isFavorite ? 'currentColor' : 'none'}
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
                </svg>
            </button>
        </Link>
    )
}

export default Card
