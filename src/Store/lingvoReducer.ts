import {Dispatch} from "redux";
import {LingvoApi} from "../api/Lingvo";
import {AppThunkDispatch} from "./store";

const SAVE_TRANSLATED_WORD = 'SAVE_TRANSLATED_WORD'
export type DictionaryType = {
    word: string
}
const initialState = {
    word: ''
}
export type DictionaryAction = ReturnType<typeof saveTranslatedWordToRedux>
export const lingvoReducer = (state: DictionaryType = initialState, action: DictionaryAction): DictionaryType => {
    switch (action.type) {
        case "SAVE_TRANSLATED_WORD": {
            return {...state, word: action.translatedWord}
        }
        default:
            return state
    }
}

export const saveTranslatedWordToRedux = (translatedWord: string) =>
    ({type: SAVE_TRANSLATED_WORD, translatedWord} as const)

//thunk
export const getTranslate = (word: string, currentLang: number, requiredLang: number): AppThunkDispatch=>{
    return async (dispatch:any)=>{
        const data = await LingvoApi.getWordTranslation(word, currentLang, requiredLang)
        console.log(data);
        //dispatch(saveTranslatedWordToRedux())
    }
}