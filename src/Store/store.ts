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
    colorScheme: colorSchemeReducer
})
// const InitialState: {
//     cardsReducer: InitialStateType,
//     lingvoReducer: DictionaryType,
//     pointsReducer: InitialStatePointsType[],
//     profileReducer: InitialStatePlayerType,
//     playerNameReducer: InitialStateNameType,
//     playerAvatarReducer: InitialStateAvatarType,
//     machineReducer: CategoryType[],
//     bonusReducer: BonusReducerType
// } = {
//     cardsReducer: {
//         card: []
//     },
//     lingvoReducer: {
//         title: '',
//         description: '',
//         url: ''
//
//     },
//     pointsReducer:Array.from({ length: 24 }, (_, index) => ({
//         level: index,
//         bestPoints: 0,
//         currentPoints: 0
//     })),
//     profileReducer: {
//         currentPoints: 0
//     },
//     playerNameReducer: {
//         name: "Мотехсовчанин"
//     },
//     playerAvatarReducer:{
//         avatar: ""
//     },
//     machineReducer: machineData,
//     bonusReducer: {
//         timeBonus: 0,
//         pointsBonus: 1,
//     },
// }
const store = createStore(reducers, loadState(), applyMiddleware
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
        colorScheme: store.getState().colorScheme
    })
})
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
export type ActionsType = DictionaryAction
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, ActionsType>
export type AppStateType = ReturnType<typeof reducers>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store