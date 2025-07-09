// ====== Book info ======
export type VolumeInfo = {
    title: string
    authors: string[]
    description: string
    imageLinks?: {
        smallThumbnail?: string
        medium?: string
        small?: string
    }
    publishedDate: string
    printedPageCount: number
    language: string
}

export type BookItem = {
    id: string
    volumeInfo: VolumeInfo
}

// ====== Tool info ======
export type ToolName = 'search' | 'filter'
