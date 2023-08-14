const UPDATE_COLOR_SCHEME = 'UPDATE_COLOR_SCHEME'
export type ChangeColorSchemeType = ReturnType<typeof changeColorScheme>

type InitialStateType = {
    scheme: string
}
const initialState = {
    scheme: 'default'
}

export const colorSchemeReducer = (state: InitialStateType = initialState, action: ChangeColorSchemeType) => {
    switch (action.type){
        case "UPDATE_COLOR_SCHEME":{
            return {
                ...state,
                scheme: action.scheme,
            };
        }
        default: {
            return state
        }
    }
}

export const changeColorScheme = (scheme: string) => ({
    type: UPDATE_COLOR_SCHEME, scheme
} as const)