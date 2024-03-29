export type InitialStateNameType = {
    name: string
}

const SAVE_PLAYER_NAME = 'SAVE_PLAYER_NAME'

export type PlayerNameType = ReturnType<typeof saveNewName>

const InitialState: InitialStateNameType = {
    name: "Мотехсовчанин"
}

export const playerNameReducer = (state: InitialStateNameType = InitialState, action: PlayerNameType): InitialStateNameType => {
    switch (action.type) {
        case 'SAVE_PLAYER_NAME': {
            return {
                ...state, name: action.newName
            }
        }
        default:
            return state
    }
}

export const saveNewName = (newName: string) => ({
    type: SAVE_PLAYER_NAME, newName
})