import type { FC } from 'react'
import CardCover from '../../atoms/CardCover'
import RowList from '../../atoms/RowList'
import './index.scss'

type CardProps = {
    coverSrc?: string
    title: string
    authors: string[]
    description: string
}

const Card: FC<CardProps> = ({ coverSrc, title, authors, description }) => {
    return (
        <div className='card'>
            <CardCover src={coverSrc} />
            <div className='info'>
                <h2 className='title'>{title}</h2>
                <RowList arr={authors} />
                {description && <p className='description'>{description}</p>}
            </div>
        </div>
    )
}

export default Card
