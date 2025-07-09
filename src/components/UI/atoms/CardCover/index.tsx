import { useEffect, useState, type FC } from 'react'
import './index.scss'

type CardCoverProps = {
    src?: string
    forPage?: boolean
}

const CardCover: FC<CardCoverProps> = ({ src, forPage = false }) => {
    const [srcUploaded, setSrcUploaded] = useState<string | undefined>(
        undefined,
    )

    useEffect(() => {
        if (src) setSrcUploaded(src)
    }, [src])

    return src ? (
        <img
            className={`cover ${forPage && 'coverForPage'}`}
            src={srcUploaded}
            alt='Обложка'
        />
    ) : (
        <div
            className={`coverTemplate ${forPage && 'coverTemplateForPage'}`}
        ></div>
    )
}

export default CardCover
