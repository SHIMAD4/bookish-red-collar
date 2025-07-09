import HomePage from './components/pages/Home'
import { QueryProvider } from './context/query/context'
import './index.scss'

import { createBrowserRouter, RouterProvider } from 'react-router'

import ReactDOM from 'react-dom/client'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <QueryProvider>
                <HomePage />
            </QueryProvider>
        ),
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />,
)
