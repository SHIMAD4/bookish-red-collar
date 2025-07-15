import HomePage from './components/pages/Home'
import { QueryProvider } from './context/query/context'
import './index.scss'

import { createBrowserRouter, RouterProvider } from 'react-router'

import ReactDOM from 'react-dom/client'
import Book from './components/pages/Book'
import FavoritePage from './components/pages/Favorite'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <QueryProvider>
                <HomePage />
            </QueryProvider>
        ),
    },
    {
        path: '/:bookId',
        element: <Book />,
    },
    {
        path: '/favorite',
        element: <FavoritePage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />,
)
