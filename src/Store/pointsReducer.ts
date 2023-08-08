export type InitialStatePointsType = {
    level: number
    bestPoints: number
}

export type PointsType = ReturnType<typeof saveBestLevel>


const SAVE_BEST_POINTS = 'SAVE_BEST_POINTS'


const InitialState: InitialStatePointsType[] = Array.from({ length: 90 }, (_, index) => ({
    level: index,
    bestPoints: 0,
    currentPoints: 0
}));

export const pointsReducer = (state: InitialStatePointsType[] = InitialState, action: PointsType) => {
switch (action.type) {
    case "SAVE_BEST_POINTS":{
        return state.map((stateItem) => stateItem.level === action.level && action.points>stateItem.bestPoints ? {
            ...stateItem, bestPoints: action.points
        } : stateItem)
    }
    default: return state
}
}

export const saveBestLevel = (level: number, points: number)=>({
        type: SAVE_BEST_POINTS, level, points
} as const)

