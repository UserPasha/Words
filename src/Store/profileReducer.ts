export type InitialStatePointsType = {
    currentPoints: number
}

const SAVE_CURRENT_POINTS = 'SAVE_CURRENT_POINTS'

export type CurrentPointsType = ReturnType<typeof saveCurrentPoints>

const InitialState: InitialStatePointsType = {
    currentPoints: 0,
}

export const profileReducer = (state: InitialStatePointsType = InitialState, action: CurrentPointsType): InitialStatePointsType => {
    switch (action.type) {
        case 'SAVE_CURRENT_POINTS': {
            return {
                ...state, currentPoints: state.currentPoints + action.points
            }
        }
        default:
            return state
    }
}

export const saveCurrentPoints = (points: number) => ({
    type: SAVE_CURRENT_POINTS, points
} as const)


