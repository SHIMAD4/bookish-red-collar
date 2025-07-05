export type VolumeInfo = {
    title: string
    authors: string[]
    description: string
    imageLinks?: {
        smallThumbnail?: string
    }
}

export type BookItem = {
    id: string
    volumeInfo: VolumeInfo
}
