import {v1} from "uuid";

const SAVE_WORDS = 'SAVE_WORDS'
export type CardType = {
    id:string
    question: string
    answer: string
}
type InitialStateType = {
    card: Array<CardType>
}

const initialState = {
    card: []
}

export type CardsAction = ReturnType<typeof saveWordsToRedux>
export const cardsReducer = (state: InitialStateType = initialState, action: CardsAction):InitialStateType => {
    switch (action.type) {
        case 'SAVE_WORDS':{
            return {...state, card: [...state.card, {question: action.rusWord, answer:action.engWord, id:v1()}]}
        }
        default: return state
    }
}
export const saveWordsToRedux = (rusWord: string, engWord: string)=>({type: SAVE_WORDS, rusWord, engWord} as const)
