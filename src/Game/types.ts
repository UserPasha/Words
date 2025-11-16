export type CategorySongsType = {
    tractTitle: string
    track: any
    original: any
    trackName: string
    isComplete: boolean
}

export type CategoryNameAndPathType = {
    name: string
    path: string
    isCompletedCategory: boolean
    tracks: CategorySongsType[]
}

export type roundType = {
    round: number
    path: string
    isCompletedRound: boolean
    categories: CategoryNameAndPathType[]
}
export type EveryCategoryType = {
    isCompletedCategory: boolean
    name: string,
    path: string,
    tracks: CategorySongsType[],

}
