import { PlayerType } from "../Game/Header/Header";
import { Action } from "redux";

const ADD_POINT = 'ADD_POINT'
const ADD_PLAYER = 'ADD_PLAYER'
const REMOVE_PLAYERS = 'REMOVE_PLAYERS'

export type AddPointAction = {
    type: typeof ADD_POINT,
    playerName: string
}

export type AddPlayerAction = {
    type: typeof ADD_PLAYER,
    playerName: string
}

export type RemovePlayersAction = {
    type: typeof REMOVE_PLAYERS
}

type ActionType = AddPointAction | AddPlayerAction | RemovePlayersAction;

const initialState: PlayerType[] = [];

export const newGameReducer = (state: PlayerType[] = initialState, action: ActionType): PlayerType[] => {
    switch (action.type) {
        case ADD_PLAYER:
            return [
                { name: action.playerName, score: 0 },
                ...state
            ];
        case ADD_POINT:
            return state.map(player =>
                player.name === action.playerName
                    ? { ...player, score: player.score + 1 }
                    : player
            );
        case "REMOVE_PLAYERS":
            return []
        default:
            return state;
    }
}

export const addPointToPlayer = (playerName: string): AddPointAction => ({
    type: ADD_POINT,
    playerName
});

export const addPlayer = (playerName: string): AddPlayerAction => ({
    type: ADD_PLAYER,
    playerName
});

export const removePlayers = (): RemovePlayersAction => ({
    type: REMOVE_PLAYERS
});