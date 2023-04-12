import totalOil from "../assets/images/match/total.png";
import mannFilter from "../assets/images/match/mann-filter.jpg";
import bluePrint from "../assets/images/match/Blue Print.png";
import asMetal from "../assets/images/match/asmetal.png";
import glaser from '../assets/images/match/glaser.jpg'
import KroonOil from '../assets/images/match/kroon-oil.png'
import {ICardMatch} from "./Match";


export const firstLevel: ICardMatch[] = [
    {
    id: 1,
    image: totalOil,
    isFlipped: false,
    name: 'a',
    isMatched: false
},
    {
        id: 2,
        image: mannFilter,
        isFlipped: false,
        name: 'b',
        isMatched: false
    },
    {
        id: 3,
        image: totalOil,
        isFlipped: false,
        name: 'a',
        isMatched: false
    },
    {
        id: 4,
        image: mannFilter,
        isFlipped: false,
        name: 'b',
        isMatched: false
    },
    {
        id: 5,
        image: bluePrint,
        isFlipped: false,
        name: 'c',
        isMatched: false
    },
    {
        id: 6,
        image: asMetal,
        isFlipped: false,
        name: 'd',
        isMatched: false
    },
    {
        id: 7,
        image: bluePrint,
        isFlipped: false,
        name: 'c',
        isMatched: false
    },
    {
        id: 8,
        image: asMetal,
        isFlipped: false,
        name: 'd',
        isMatched: false
    }
]

// export const secondLevel: ICardMatch[] = firstLevel.push({
//     id: 8,
//     image: asMetal,
//     isFlipped: false,
//     name: 'd',
//     isMatched: false
// })

export const secondLevel: ICardMatch[] = [...firstLevel,
    {
    id: 9,
    image: glaser,
    isFlipped: false,
    name: 'e',
    isMatched: false
},
    {
        id: 10,
        image: glaser,
        isFlipped: false,
        name: 'e',
        isMatched: false
    },
    {
        id: 11,
        image: KroonOil,
        isFlipped: false,
        name: 'f',
        isMatched: false
    },
    {
        id: 12,
        image: KroonOil,
        isFlipped: false,
        name: 'f',
        isMatched: false
    },
]