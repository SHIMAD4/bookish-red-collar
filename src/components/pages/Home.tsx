import useBooks from '@/hooks/useBooks'
import HomeTemplate from '../templates/Home'

const HomePage = () => {
    const books = useBooks('JavaScript')

    return <HomeTemplate books={books} />
}

export default HomePage
