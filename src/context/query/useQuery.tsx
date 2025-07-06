import { useContext } from 'react'
import QueryContext from './context'

export const useQuery = () => useContext(QueryContext)
