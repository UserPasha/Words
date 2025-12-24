export type CategorySongsType = {
    id?: string;
    tractTitle: string;
    track: string;
    original: string;
    trackName: string;
    isComplete: boolean;
}


export type CategoryNameAndPathType = {
    name: string
    id: string;
    isCompletedCategory: boolean
    tracks: CategorySongsType[]
}
export type CategoryRaw = {
    name: string

    isCompletedCategory: boolean
    tracks: CategorySongsType[]
}
export type roundType = {
    round: number

    isCompletedRound: boolean
    categories: CategoryNameAndPathType[]
}
export type rawType = {
    round: number

    isCompletedRound: boolean
    categories: CategoryRaw[]
}
export type EveryCategoryType = {
    isCompletedCategory: boolean
    name: string,
    path: string,
    tracks: CategorySongsType[],

}
