type InitialStateType = {
    category: string
    brand: string
    cover: string
}

const SAVE_CURRENT_REWARD = 'SAVE_CURRENT_REWARD'

export type CurrentRewardsType = ReturnType<typeof saveCurrentReward>

const InitialState: InitialStateType = {
    category: '',
    brand: '',
    cover: ''
}

export const rewardsReducer = (state: InitialStateType = InitialState, action: CurrentRewardsType): InitialStateType => {
    switch (action.type) {
        case "SAVE_CURRENT_REWARD": {
            return {
                ...state, category: action.category, brand: action.brand, cover: action.cover
            }
        }
        default:
            return state
    }
}

export const saveCurrentReward = (category: string, brand: string, cover: string) => ({
    type: SAVE_CURRENT_REWARD, category, brand, cover
} as const)