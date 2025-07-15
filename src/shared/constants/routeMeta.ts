import { Pathnames } from '@/shared/types'

export type RouteMeta = {
    title: string
    path: Pathnames
}

export const ROUTE_META: Record<Pathnames, RouteMeta> = {
    [Pathnames.Main]: {
        title: 'Главная',
        path: Pathnames.Main,
    },
    [Pathnames.Favorite]: {
        title: 'Избранное',
        path: Pathnames.Favorite,
    },
}
