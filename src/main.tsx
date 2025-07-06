import { createRoot } from 'react-dom/client'
import HomePage from './components/pages/Home'
import { KeywordsProvider } from './context/keywordsСontext'
import './index.scss'

createRoot(document.getElementById('root')!).render(
    <KeywordsProvider>
        <HomePage />
    </KeywordsProvider>,
)
