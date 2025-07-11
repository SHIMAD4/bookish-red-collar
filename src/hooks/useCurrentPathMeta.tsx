import { ROUTE_META } from '@/shared/constants/routeMeta'
import { Pathnames } from '@/shared/types'
import { useLocation } from 'react-router'

export const useCurrentPathMeta = () => {
    const { pathname } = useLocation()

    const meta = ROUTE_META[pathname as Pathnames]

    return {
        title: meta?.title ?? 'Неизвестный путь',
        path: meta?.path ?? pathname,
    }
}
