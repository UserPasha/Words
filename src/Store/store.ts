import {applyMiddleware, combineReducers, createStore} from "redux";
import {cardsReducer, CardType, InitialStateType} from "./cardsReducer";
import {loadState, saveState} from "../Utils/localStorageUtils";
import {DictionaryAction, DictionaryType, lingvoReducer} from "./lingvoReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {InitialStatePointsType, pointsReducer} from "./pointsReducer";
import {InitialStatePlayerType, profileReducer} from "./profileReducer";
import {InitialStateNameType, playerNameReducer} from "./PlayerNameReducer";
import {InitialStateAvatarType, playerAvatarReducer} from "./PlayerAvatarReducer";
import {machineReducer} from "./machineReducer";
import {bonusReducer, BonusReducerType} from "./bonusReducer";
import localStorageMiddleware from "./localStorageMiddleware";
import {CategoryType, machineData} from "../Match/BonusMachine/bomusMachine.data";
import {rewardsReducer} from "./RewardsReducer";
import {colorSchemeReducer} from "./colorSchemeReducer";
import {newGameReducer} from "./NewGameReducer";
import {SongsReducer} from "./songsReducer";
import {BatisReducer} from "./BatisReducer";

const reducers = combineReducers({
    cards: cardsReducer,
    lingvo: lingvoReducer,
    points: pointsReducer,
    profile: profileReducer,
    playerName: playerNameReducer,
    playerAvatar: playerAvatarReducer,
    machine: machineReducer,
    bonus: bonusReducer,
    rewards: rewardsReducer,
    colorScheme: colorSchemeReducer,
    newGame: newGameReducer,
    songs: SongsReducer,
    batis: BatisReducer
})

const store = createStore(reducers,
    loadState(),
    applyMiddleware
(
    thunk
//localStorageMiddleware
))

store.subscribe(() => {
    saveState({
        cards: store.getState().cards,
        lingvo: store.getState().lingvo,
        points: store.getState().points,
        profile: store.getState().profile,
        playerName: store.getState().playerName,
        playerAvatar: store.getState().playerAvatar,
        machine: store.getState().machine,
        bonus: store.getState().bonus,
        rewards: store.getState().rewards,
        colorScheme: store.getState().colorScheme,
        newGame: store.getState().newGame,
        songs: store.getState().songs,
        batis: store.getState().batis
    })
})
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
export type ActionsType = DictionaryAction
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, ActionsType>
export type AppStateType = ReturnType<typeof reducers>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store