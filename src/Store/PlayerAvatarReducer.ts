export type InitialStatePointsType = {
    avatar: string
}

const SAVE_PLAYER_AVATAR = 'SAVE_PLAYER_AVATAR'

export type PlayerAvatarType = ReturnType<typeof saveNewAvatar>

const InitialState: InitialStatePointsType = {
    avatar: ""
}

export const playerAvatarReducer = (state: InitialStatePointsType = InitialState, action: PlayerAvatarType) =>{
    switch (action.type) {
        case 'SAVE_PLAYER_AVATAR' : {
            return {
                ...state, avatar: action.avatar
            }
        }
        default:
            return state
    }
}

export const saveNewAvatar = (avatar: string)=>({
    type: SAVE_PLAYER_AVATAR, avatar
})