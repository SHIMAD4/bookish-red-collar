import { useContext } from 'react'
import KeywordsContext from './keywords-context'

export const useKeywords = () => useContext(KeywordsContext)
