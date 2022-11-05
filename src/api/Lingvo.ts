import axios from "axios";

const KEY = process.env.KEY || ''
const VALUE = process.env.VALUE || ''

const instance = axios.create({
    baseURL: 'https://developers.lingvolive.com/api/v1/',
    withCredentials: true,
    headers:{
        KEY: VALUE
    }
})

export const LingvoApi = {
    getWordTranslation(word: string, currentLang: number, requiredLang: number){
        return instance.get(`Translation?text=${word}&srcLang=${currentLang}&dstLang=${requiredLang}`).then(response => response.data)
    }
}