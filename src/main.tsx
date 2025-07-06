import { createRoot } from 'react-dom/client'
import HomePage from './components/pages/Home'
import { FilterProvider } from './context/filter/filterContext'
import { KeywordsProvider } from './context/keywords/keywordsСontext'
import './index.scss'

createRoot(document.getElementById('root')!).render(
    <KeywordsProvider>
        <FilterProvider>
            <HomePage />
        </FilterProvider>
    </KeywordsProvider>,
)
