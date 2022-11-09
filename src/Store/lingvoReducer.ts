import {Dispatch} from "redux";
import {FakeApi, LingvoApi} from "../api/Lingvo";
import {AppThunkDispatch} from "./store";
import {useDispatch} from "react-redux";

//const SAVE_TRANSLATED_WORD = 'SAVE_TRANSLATED_WORD'
const SAVE_IMAGE = 'SAVE_IMAGE'
export type DictionaryType = {
    //word: string
    title: string
    description: string
    url: string
}
const initialState = {
    //word: ''
    title: '',
    description: '',
    url: ''
}
//export type DictionaryAction = ReturnType<typeof saveTranslatedWordToRedux>
export type DictionaryAction = ReturnType<typeof saveImageToRedux>
export const lingvoReducer = (state: DictionaryType = initialState, action: DictionaryAction): DictionaryType => {
    switch (action.type) {
        // case "SAVE_TRANSLATED_WORD": {
        //     return {...state, word: action.translatedWord}
        // }
        case "SAVE_IMAGE": {
            return {...state, url: action.url, title: action.title, description: action.description}
        }
        default:
            return state
    }
}

// export const saveTranslatedWordToRedux = (translatedWord: string) =>
//     ({type: SAVE_TRANSLATED_WORD, translatedWord} as const)
export const saveImageToRedux = (title: string, description: string, url: string) =>
    ({type: SAVE_IMAGE, url, title, description} as const)

//thunk
export const getTranslate = (word: string, currentLang: number, requiredLang: number): AppThunkDispatch => {
    return async (dispatch: any) => {
        const data = await LingvoApi.getWordTranslation(word, currentLang, requiredLang)
       ;
        //dispatch(saveTranslatedWordToRedux())
    }
}
export const getImageThunk = (_type: string, _height: number): AppThunkDispatch => {
    return async (dispatch: any) => {
        const data = await FakeApi.getImage(_type, _height)
        dispatch(saveImageToRedux(data.data.data[0].title, data.data.data[0].description, data.data.data[0].url))

    }
}