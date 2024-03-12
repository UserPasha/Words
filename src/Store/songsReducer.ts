// import {dataSongs, roundType} from "../Game/songs.data";
//
// const InitialState: roundType[] = dataSongs
//
//
// export type CompleteSongType = ReturnType<typeof completeSong>
// export type CompleteCategoryType = ReturnType<typeof completeCategory>
// export type CompleteRoundType = ReturnType<typeof completeRound>
// export type ResetGameType = ReturnType<typeof resetGame>
// type ActionType = CompleteSongType | CompleteCategoryType | CompleteRoundType | ResetGameType
// const COMPLETE_SONG = 'COMPLETE_SONG'
// const COMPLETE_CATEGORY = 'COMPLETE_CATEGORY'
// const COMPLETE_ROUND = 'COMPLETE_ROUND'
// const RESET_GAME = 'RESET_GAME'
//
// export const SongsReducer = (state: roundType[] = InitialState, action: ActionType): roundType[] => {
//     switch (action.type) {
//         case "COMPLETE_ROUND":
//             return state.map((round) =>
//                 round.round === action.roundNumber ? {...round, isCompletedRound: true} : round
//             );
//         case "COMPLETE_CATEGORY": {
//             return state.map((round) =>
//                 round.round === action.roundNumber ?
//                     {
//                         ...round,
//                         categories: round.categories.map((category) =>
//                             category.name === action.categoryName ? { ...category, isCompletedCategory: true } : category
//                         )
//                     }
//                     : round
//             );
//         }
//
//         case "COMPLETE_SONG":
//             return state.map((round) => {
//                 if (round.round === action.roundNumber) {
//                     return {
//                         ...round,
//                         categories: round.categories.map((category) => {
//                             if (category.name === action.categoryName) {
//                                 return {
//                                     ...category,
//                                     tracks: category.tracks.map((track) => {
//                                         if (track.trackName === action.songName) {
//                                             return {
//                                                 ...track,
//                                                 isComplete: true
//                                             };
//                                         } else {
//                                             return track;
//                                         }
//                                     })
//                                 };
//                             } else {
//                                 return category;
//                             }
//                         })
//                     };
//                 } else {
//                     return round;
//                 }
//             });
//         case "RESET_GAME":
//             return InitialState
//
//
//         default:
//             return state;
//     }
// }
//
// export const completeSong = (roundNumber: number, categoryName: string, songName: string) => ({
//     type: COMPLETE_SONG, roundNumber, categoryName, songName
// } as const)
//
// export const completeCategory = (roundNumber: number, categoryName: string,) => ({
//     type: COMPLETE_CATEGORY, roundNumber, categoryName
// } as const)
//
// export const completeRound = (roundNumber: number) => ({
//     type: COMPLETE_ROUND, roundNumber
// } as const)
//
// export const resetGame = () => ({
//     type: RESET_GAME
// } as const)

import { dataSongs, roundType } from "../Game/songs.data";

const InitialState: roundType[] = dataSongs;

export type CompleteSongType = ReturnType<typeof completeSong>;
export type CompleteCategoryType = ReturnType<typeof completeCategory>;
export type CompleteRoundType = ReturnType<typeof completeRound>;
export type ResetGameType = ReturnType<typeof resetGame>;
type ActionType =
    | CompleteSongType
    | CompleteCategoryType
    | CompleteRoundType
    | ResetGameType;
const COMPLETE_SONG = "COMPLETE_SONG";
const COMPLETE_CATEGORY = "COMPLETE_CATEGORY";
const COMPLETE_ROUND = "COMPLETE_ROUND";
const RESET_GAME = "RESET_GAME";

export const SongsReducer = (
    state: roundType[] = InitialState,
    action: ActionType
): roundType[] => {
    switch (action.type) {
        case "COMPLETE_ROUND":
            return state.map((round) =>
                round.round === action.roundNumber
                    ? { ...round, isCompletedRound: true }
                    : round
            );
        case "COMPLETE_CATEGORY": {
            return state.map((round) =>
                round.round === action.roundNumber
                    ? {
                        ...round,
                        categories: round.categories.map((category) =>
                            category.name === action.categoryName
                                ? { ...category, isCompletedCategory: true }
                                : category
                        ),
                    }
                    : round
            );
        }

        case "COMPLETE_SONG":
            return state.map((round) => {
                if (round.round === action.roundNumber) {
                    return {
                        ...round,
                        categories: round.categories.map((category) => {
                            if (category.name === action.categoryName) {
                                return {
                                    ...category,
                                    tracks: category.tracks.map((track) => {
                                        if (track.trackName === action.songName) {
                                            return {
                                                ...track,
                                                isComplete: true,
                                            };
                                        } else {
                                            return track;
                                        }
                                    }),
                                };
                            } else {
                                return category;
                            }
                        }),
                    };
                } else {
                    return round;
                }
            });
        case "RESET_GAME":
            return InitialState;

        default:
            return state;
    }
};

export const completeSong = (
    roundNumber: number,
    categoryName: string,
    songName: string
) => ({
    type: COMPLETE_SONG,
    roundNumber,
    categoryName,
    songName,
} as const);

export const completeCategory = (
    roundNumber: number,
    categoryName: string
) => ({
    type: COMPLETE_CATEGORY,
    roundNumber,
    categoryName,
} as const);

export const completeRound = (roundNumber: number) => ({
    type: COMPLETE_ROUND,
    roundNumber,
} as const);

export const resetGame = () => ({
    type: RESET_GAME,
} as const);