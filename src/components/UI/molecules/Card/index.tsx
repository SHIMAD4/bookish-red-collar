import type { FC } from 'react'
import { Link } from 'react-router'
import CardCover from '../../atoms/CardCover'
import FavoriteButton from '../../atoms/FavoriteButton'
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
    return (
        <Link to={`${bookId}`} className='card'>
            <CardCover src={coverSrc} />
            <div className='info'>
                <h2 className='title'>{title}</h2>
                <RowList arr={authors} />
                {description && <p className='description'>{description}</p>}
            </div>
            <FavoriteButton bookId={bookId} />
        </Link>
    )
}

export default Card
