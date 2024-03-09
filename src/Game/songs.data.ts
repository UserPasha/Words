type EveryCategoryType = {
    isCompletedCategory: boolean
    name: string,
    trackOne: boolean,
    trackTwo: boolean,
    trackThree: boolean,
    trackFour: boolean,
    trackFive: boolean
}
type categoriesType = {
    firstCategory: EveryCategoryType
    secondCategory: EveryCategoryType
    thirdCategory: EveryCategoryType
    fourthCategory: EveryCategoryType
    fifthCategory: EveryCategoryType
}
type roundType = {
    round: number
    isCompletedRound: boolean
    categories: categoriesType
}
export const dataSongs: roundType[]  = [{
    round: 1,
    isCompletedRound: false,
    categories: {
        firstCategory: {
            isCompletedCategory: false,
            name: '90-е',
            trackOne: false,
            trackTwo: false,
            trackThree: false,
            trackFour: false,
            trackFive: false
        },
        secondCategory: {
            isCompletedCategory: false,
            name: 'Фильмы',
            trackOne: false,
            trackTwo: false,
            trackThree: false,
            trackFour: false,
            trackFive: false
        },
        thirdCategory: {
            isCompletedCategory: false,
            name: 'Женские имена',
            trackOne: false,
            trackTwo: false,
            trackThree: false,
            trackFour: false,
            trackFive: false
        },

        fourthCategory: {
            isCompletedCategory: false,
            name: 'Современные',
            trackOne: false,
            trackTwo: false,
            trackThree: false,
            trackFour: false,
            trackFive: false
        },
        fifthCategory: {
            isCompletedCategory: false,
            name: 'ИИ ремикс',
            trackOne: false,
            trackTwo: false,
            trackThree: false,
            trackFour: false,
            trackFive: false
        }
    }
},
    {
        round: 2,
        isCompletedRound: false,
        categories: {
            firstCategory: {
                isCompletedCategory: false,
                name: '2000-е',
                trackOne: false,
                trackTwo: false,
                trackThree: false,
                trackFour: false,
                trackFive: false
            },
            secondCategory: {
                isCompletedCategory: false,
                name: 'Сериалы',
                trackOne: false,
                trackTwo: false,
                trackThree: false,
                trackFour: false,
                trackFive: false
            },
            thirdCategory: {
                isCompletedCategory: false,
                name: 'Мужские имена',
                trackOne: false,
                trackTwo: false,
                trackThree: false,
                trackFour: false,
                trackFive: false
            },

            fourthCategory: {
                isCompletedCategory: false,
                name: 'Тренды',
                trackOne: false,
                trackTwo: false,
                trackThree: false,
                trackFour: false,
                trackFive: false
            },
            fifthCategory: {
                isCompletedCategory: false,
                name: 'ИИ ремикс',
                trackOne: false,
                trackTwo: false,
                trackThree: false,
                trackFour: false,
                trackFive: false
            }
        }
    }
]

