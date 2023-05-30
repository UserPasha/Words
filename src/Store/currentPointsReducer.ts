export type InitialStatePointsType = {
    currentPoints: number
}

export type CurrentPointsType = ReturnType<typeof saveCurrentPoints>

const SAVE_CURRENT_POINTS = 'SAVE_CURRENT_POINTS'

const InitialState: InitialStatePointsType = {
    currentPoints: 0
}

export const currentPointsReducer = (state: InitialStatePointsType = InitialState, action: CurrentPointsType) => {
    switch (action.type) {
        case 'SAVE_CURRENT_POINTS': {
            return {
                ...state, currentPoints: state.currentPoints+action.points
            }
         }
        default:
            return state
    }
}

export const saveCurrentPoints = (points: number) => ({
    type: SAVE_CURRENT_POINTS, points
} as const)