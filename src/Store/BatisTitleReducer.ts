const SET_TITLE = "SET_TITLE";
const CLEAR_TITLE = "CLEAR_TITLE";

export type SetTitleAction = {
    type: typeof SET_TITLE;
    title: string;
};

export type ClearTitleAction = {
    type: typeof CLEAR_TITLE;
};

type ActionType = SetTitleAction | ClearTitleAction;

const initialState = "";

export const BatisTitleReducer = (state = initialState, action: ActionType): string => {
    switch (action.type) {
        case SET_TITLE:
            return action.title;
        case CLEAR_TITLE:
            return "";
        default:
            return state;
    }
};

export const setTitle = (title: string): SetTitleAction => ({
    type: SET_TITLE,
    title,
});

export const clearTitle = (): ClearTitleAction => ({
    type: CLEAR_TITLE,
});
