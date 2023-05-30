import {applyMiddleware, combineReducers, createStore} from "redux";
import {cardsReducer} from "./cardsReducer";
import {loadState, saveState} from "../Utils/localStorageUtils";
import {DictionaryAction, lingvoReducer} from "./lingvoReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {pointsReducer} from "./pointsReducer";
import {currentPointsReducer} from "./currentPointsReducer";

const reducers = combineReducers({
    cards: cardsReducer,
    lingvo: lingvoReducer,
    points: pointsReducer,
    currentPoints: currentPointsReducer
})

const store = createStore(reducers, loadState(), applyMiddleware(thunk))

store.subscribe(()=>{
    saveState({
        cards: store.getState().cards,
        lingvo: store.getState().lingvo,
        points: store.getState().points,
        currentPoints: store.getState().currentPoints
    })
})
export type AppThunk<ReturnType = void > = ThunkAction<ReturnType, RootState, unknown, ActionsType>
export type ActionsType = DictionaryAction
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, ActionsType>
export type AppStateType = ReturnType<typeof reducers>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store