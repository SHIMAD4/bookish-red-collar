import type { FC } from 'react'
import './index.scss'

type CardCoverProps = {
    src?: string
}

const CardCover: FC<CardCoverProps> = ({ src }) => {
    return src ? (
        <img className='cover' src={src} alt='Обложка' width={128} />
    ) : (
        <div className='coverTemplate'></div>
    )
}

export default CardCover
