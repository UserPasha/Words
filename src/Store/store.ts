import {combineReducers, createStore} from "redux";
import {cardsReducer} from "./cardsReducer";
import {loadState, saveState} from "../Utils/localStorageUtils";

const reducers = combineReducers({
    cards: cardsReducer
})

const store = createStore(reducers, loadState())

store.subscribe(()=>{
    saveState({
        cards: store.getState().cards
    })
})

export type AppStateType = ReturnType<typeof reducers>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store