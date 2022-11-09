import axios from "axios";

const KEY = process.env.KEY || 'Authorization'
const VALUE = process.env.VALUE || 'Bearer ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmxlSEFpT2pFMk5qYzNNek00TnpVc0lrMXZaR1ZzSWpwN0lrTm9ZWEpoWTNSbGNuTlFaWEpFWVhraU9qVXdNREF3TENKVmMyVnlTV1FpT2pjeE5Ua3NJbFZ1YVhGMVpVbGtJam9pTlRoak1XRmlaak10WXpNNU15MDBZemd3TFdFNE1XSXROVGcwTldWbU5EUmtNV1l4SW4xOS5Bb0JOU1hvaGZYM2ZtbVNsbEoyaTF4S2ZIS1NSdEFkSDBFRmFzbEt6bmRB'

const instance = axios.create({
    baseURL: 'https://developers.lingvolive.com/api/v1/',


    headers: {
        withCredentials: true,
        Authorization: "Bearer ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmxlSEFpT2pFMk5qYzNOVGcwTnpNc0lrMXZaR1ZzSWpwN0lrTm9ZWEpoWTNSbGNuTlFaWEpFWVhraU9qVXdNREF3TENKVmMyVnlTV1FpT2pjeE5Ua3NJbFZ1YVhGMVpVbGtJam9pTlRoak1XRmlaak10WXpNNU15MDBZemd3TFdFNE1XSXROVGcwTldWbU5EUmtNV1l4SW4xOS5wMHZEdHFya3lEcTBCNVNqOThRbVNFNXBNc1c3MDNaaUYyWjJOVjR4V0FF"
    }
})

const instanceFakeAPI = axios.create({
    baseURL: 'https://fakerapi.it/api/v1/'
})
export const LingvoApi = {
    getWordTranslation(word: string, currentLang: number, requiredLang: number) {
        return instance.get(`Translation?text=${word}&srcLang=${currentLang}&dstLang=${requiredLang}`)
    }
}
export const FakeApi = {
    getImage(_type: string, _height: number) {
        return instanceFakeAPI.get(`images?_quantity=1&_type=${_type}&_height=${_height}`)
    }
}