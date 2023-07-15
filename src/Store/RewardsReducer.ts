type InitialStateType = {
    category: string
    brand: string
}

const SAVE_CURRENT_REWARD = 'SAVE_CURRENT_REWARD'

export type CurrentRewardsType = ReturnType<typeof saveCurrentReward>

const InitialState: InitialStateType = {
    category: '',
    brand: ''
}

export const rewardsReducer = (state: InitialStateType = InitialState, action: CurrentRewardsType): InitialStateType => {
    switch (action.type) {
        case "SAVE_CURRENT_REWARD": {
            return {
                ...state, category: action.category, brand: action.brand
            }
        }
        default:
            return state
    }
}

export const saveCurrentReward = (category: string, brand: string) => ({
    type: SAVE_CURRENT_REWARD, category, brand
} as const)