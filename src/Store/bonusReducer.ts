export type BonusReducerType = {
    timeBonus: number
    pointsBonus: number
    token: string
}

const InitialState: BonusReducerType = {
    timeBonus: 0,
    pointsBonus: 1,
    token: ''
}

const ADD_BONUS_TIME = 'ADD_BONUS_TIME'
const ADD_BONUS_POINTS = 'ADD_BONUS_POINTS'
const ADD_TOKEN = 'ADD_TOKEN'

export type BonusTimeType = ReturnType<typeof addBonusTime>
export type BonusPointsType = ReturnType<typeof addBonusPoints>
export type TokenType = ReturnType<typeof addToken>

export const bonusReducer = (state:BonusReducerType = InitialState, action: BonusTimeType| BonusPointsType| TokenType) =>{
    switch (action.type){
        case "ADD_BONUS_TIME":{
            return {
                ...state, timeBonus: state.timeBonus = action.time
            }
        }
        case "ADD_BONUS_POINTS":{
            return {
                ...state, pointsBonus: state.pointsBonus = action.bonus
            }
        }
        case "ADD_TOKEN":{
            return {
                ...state, token: state.token = action.token
            }
        }
        default:
            return state;
    }
}

export const addBonusTime = (time: number) =>({
    type: ADD_BONUS_TIME, time
}as const)

export const addBonusPoints = (bonus: number) =>({
    type: ADD_BONUS_POINTS, bonus
}as const)

export const addToken = (token: string) =>({
    type: ADD_TOKEN, token
}as const)