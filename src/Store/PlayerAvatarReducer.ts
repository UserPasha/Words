import defaultAvatar from '../assets/images/match/MTex.jpg'
export type InitialStateAvatarType = {
    avatar: string
}

const SAVE_PLAYER_AVATAR = 'SAVE_PLAYER_AVATAR'

export type PlayerAvatarType = ReturnType<typeof saveNewAvatar>

const InitialState: InitialStateAvatarType = {
    avatar: defaultAvatar
}

export const playerAvatarReducer = (state: InitialStateAvatarType = InitialState, action: PlayerAvatarType) =>{
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