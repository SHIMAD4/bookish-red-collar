import { Books } from '@/shared/api'
import type { BookItem } from '@/shared/types'
import { useEffect, useState, type FC } from 'react'
import { useParams } from 'react-router'
import BookTemplate from '../templates/Book'

const BookPage: FC = () => {
    const { bookId } = useParams<{ bookId: string }>()
    const [book, setBook] = useState<BookItem | null>(null)

    useEffect(() => {
        if (!bookId) return

        Books.getBookById(bookId)
            .then((res) => res.data)
            .then((data) => setBook(data))
    }, [bookId])

    return (
        book && (
            <BookTemplate
                id={book.id}
                title={book.volumeInfo.title}
                imageLinks={book.volumeInfo.imageLinks}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                publishedDate={book.volumeInfo.publishedDate}
                printedPageCount={book.volumeInfo.printedPageCount}
                language={book.volumeInfo.language}
            />
        )
    )
}

export default BookPage
