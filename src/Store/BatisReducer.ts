import {ListItem} from "../Home/Batis";
import {RemovePlayersAction} from "./NewGameReducer";


const ADD_INFO = 'ADD_INFO'
const REMOVE_INFO = 'REMOVE_INFO'

export type AddInfoAction = {
    type: typeof ADD_INFO,
    name: string,
    size:string,
    quantity: string
}

export type RemoveInfoAction = {
    type: typeof REMOVE_INFO,
}

type ActionType = AddInfoAction | RemoveInfoAction

const initialState: ListItem[] = [];

export const BatisReducer = (state: ListItem[] = initialState,  action: ActionType): ListItem[] => {
switch (action.type) {
    case ADD_INFO:
        return [
            ...state,
            { name: action.name, size: action.size, quantity: action.quantity }
        ];
    case REMOVE_INFO:
        return [];
    default:
        return state;
}

}

export const addInfo = (name: string, size:string, quantity: string ):AddInfoAction =>({
type: ADD_INFO,
    name, size, quantity
})
export const removeInfo = (): RemoveInfoAction => ({
    type: REMOVE_INFO
});