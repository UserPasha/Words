import {ListItem} from "../Home/Batis";

const ADD_INFO = 'ADD_INFO';
const REMOVE_INFO = 'REMOVE_INFO';
const REMOVE_ITEM = 'REMOVE_ITEM';

export type AddInfoAction = {
    type: typeof ADD_INFO;
    name: string;
    size: string;
    quantity: string;
};

export type RemoveInfoAction = {
    type: typeof REMOVE_INFO;
};

export type RemoveItemAction = {
    type: typeof REMOVE_ITEM;
    index: number;
};

type ActionType = AddInfoAction | RemoveInfoAction | RemoveItemAction;

const initialState: ListItem[] = [];

export const BatisReducer = (state: ListItem[] = initialState, action: ActionType): ListItem[] => {
    switch (action.type) {
        case ADD_INFO:
            return [...state, { name: action.name, size: action.size, quantity: action.quantity }];
        case REMOVE_INFO:
            return [];
        case REMOVE_ITEM:
            return state.filter((_, i) => i !== action.index);
        default:
            return state;
    }
};

export const addInfo = (name: string, size: string, quantity: string): AddInfoAction => ({
    type: ADD_INFO,
    name,
    size,
    quantity,
});

export const removeInfo = (): RemoveInfoAction => ({
    type: REMOVE_INFO,
});

export const removeItem = (index: number): RemoveItemAction => ({
    type: REMOVE_ITEM,
    index,
});