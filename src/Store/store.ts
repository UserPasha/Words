import {combineReducers, createStore} from "redux";
import {cardsReducer} from "./cardsReducer";

const reducers = combineReducers({
    cards: cardsReducer
})

const store = createStore(reducers)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store