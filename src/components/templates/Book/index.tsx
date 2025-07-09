import CardCover from '@/components/UI/atoms/CardCover'
import FavoriteButton from '@/components/UI/atoms/FavoriteButton'
import RowList from '@/components/UI/atoms/RowList'
import type { VolumeInfo } from '@/shared/types'
import parse from 'html-react-parser'
import type { FC } from 'react'
import './index.scss'

const BookTemplate: FC<VolumeInfo & { id: string }> = ({
    id,
    title,
    imageLinks,
    authors,
    description,
    publishedDate,
    printedPageCount,
    language,
}) => {
    return (
        title && (
            <div className='book'>
                <div className='book_inner'>
                    <CardCover forPage={true} src={imageLinks?.small} />
                    <div className='book_info'>
                        <div className='info_main'>
                            <h1>{title}</h1>
                            <RowList arr={authors} />
                        </div>
                        <FavoriteButton bookId={id} />
                        <div className='info_desc'>
                            <p>
                                Язык: <span>{language.toUpperCase()}</span>
                            </p>
                            <p>
                                Кол-во страниц: <span>{printedPageCount}</span>
                            </p>
                            <p>
                                Дата публикации: <span>{publishedDate}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='description'>{parse(description)}</div>
            </div>
        )
    )
}

export default BookTemplate
