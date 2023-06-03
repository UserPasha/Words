export type InitialStatePointsType = {
    currentPoints: number
}

const SAVE_CURRENT_POINTS = 'SAVE_CURRENT_POINTS'
const POINTS_AFTER_SHOP = 'POINTS_AFTER_SHOP'

export type CurrentPointsType = ReturnType<typeof saveCurrentPoints>
export type PointsAfterShopType = ReturnType<typeof PointsAfterShop>

const InitialState: InitialStatePointsType = {
    currentPoints: 0,
}

export const profileReducer = (state: InitialStatePointsType = InitialState, action: CurrentPointsType | PointsAfterShopType): InitialStatePointsType => {
    switch (action.type) {
        case 'SAVE_CURRENT_POINTS': {
            return {
                ...state, currentPoints: state.currentPoints + action.points
            }
        }
        case "POINTS_AFTER_SHOP":{
            return {
                ...state, currentPoints: state.currentPoints - action.points
            }
        }
        default:
            return state
    }
}

export const saveCurrentPoints = (points: number) => ({
    type: SAVE_CURRENT_POINTS, points
} as const)

export const PointsAfterShop = (points: number) => ({
    type: POINTS_AFTER_SHOP, points
} as const)


