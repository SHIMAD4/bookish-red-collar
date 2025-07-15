import { ROUTE_META } from '@/shared/constants/routeMeta'
import type { Pathnames } from '@/shared/types'

export function useTitleByPath(path: Pathnames | string): string {
    return ROUTE_META[path as Pathnames]?.title ?? 'Неизвестный путь'
}
