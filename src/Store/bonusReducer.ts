export type BonusReducerType = {
    timeBonus: number
    pointsBonus: number
}

const InitialState: BonusReducerType = {
    timeBonus: 0,
    pointsBonus: 1
}

const ADD_BONUS_TIME = 'ADD_BONUS_TIME'
const ADD_BONUS_POINTS = 'ADD_BONUS_POINTS'

export type BonusTimeType = ReturnType<typeof addBonusTime>
export type BonusPointsType = ReturnType<typeof addBonusPoints>

export const bonusReducer = (state:BonusReducerType = InitialState, action: BonusTimeType| BonusPointsType) =>{
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
    }
}

export const addBonusTime = (time: number) =>({
    type: ADD_BONUS_TIME, time
}as const)

export const addBonusPoints = (bonus: number) =>({
    type: ADD_BONUS_POINTS, bonus
}as const)