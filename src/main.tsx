import { createRoot } from 'react-dom/client'
import HomePage from './components/pages/Home'
import { QueryProvider } from './context/query/context'
import { ScrollProvider } from './context/scroll/context'
import './index.scss'

createRoot(document.getElementById('root')!).render(
    <QueryProvider>
        <ScrollProvider>
            <HomePage />
        </ScrollProvider>
    </QueryProvider>,
)
