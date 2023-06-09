import {CategoryType} from "../Match/BonusMachine/bomusMachine.data";
import {machineReducer, showProductPicture} from "./machineReducer";

const startState: CategoryType[] = [
    {
        name: 'Battery',
        bgImage: '',
        brands: [{
            name: 'default',
            pictureUrl: '',
            showPicture: true
        },
            {
                name: 'first',
                pictureUrl: '',
                showPicture: false
            },
            {
                name: 'second',
                pictureUrl: '',
                showPicture: false
            },
            {
                name: 'third',
                pictureUrl: '',
                showPicture: false
            },]
    },
    {
        name: 'Oil',
        bgImage: '',
        brands: [{
            name: 'default',
            pictureUrl: '',
            showPicture: true
        },
            {
                name: 'first',
                pictureUrl: '',
                showPicture: false
            },
            {
                name: 'second',
                pictureUrl: '',
                showPicture: false
            },
            {
                name: 'third',
                pictureUrl: '',
                showPicture: false
            },]
    },
]

test('correct picture should be show', ()=>{
    const endState = machineReducer(startState, showProductPicture('oil', 'first' ))
    //expect(endState[0].name).toBe('Battery')
    //expect(endState[1].brands[1].showPicture).toBeTruthy()

})

