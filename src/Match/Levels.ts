import totalOil from "../assets/images/match/total.png";
import mannFilter from "../assets/images/match/mann_filter.jpg";
import bluePrint from "../assets/images/match/Blue_Print.jpg";
import asMetal from "../assets/images/match/asmetal.png";
import glaser from '../assets/images/match/glaser.jpg'
import KroonOil from '../assets/images/match/kroon-oil.png'
import metelli from '../assets/images/match/metelli.png'
import filtron from '../assets/images/match/FILTRON.png'
import victorReinz from '../assets/images/match/victor.jpg'
import febi from '../assets/images/match/febi-bilstein.svg'
import FBlue from '../assets/images/match/Filtron/filBlue.jpeg'
import FRed from '../assets/images/match/Filtron/filRed.jpg'
import FYellow from '../assets/images/match/Filtron/filYell.jpeg'
import FGreen from '../assets/images/match/Filtron/filGreen.jpg'
import {ICardMatch} from "../hooks/useMatch";


export const filtronMix: ICardMatch[] = [
    {
        id: 101,
        image: FBlue,
        isFlipped: false,
        name: 'aa',
        isMatched: false
    },
    {
        id: 102,
        image: FBlue,
        isFlipped: false,
        name: 'aa',
        isMatched: false
    },
    {
        id: 103,
        image: FRed,
        isFlipped: false,
        name: 'ab',
        isMatched: false
    },
    {
        id: 104,
        image: FRed,
        isFlipped: false,
        name: 'ab',
        isMatched: false
    },
    {
        id: 105,
        image: FYellow,
        isFlipped: false,
        name: 'ac',
        isMatched: false
    },
    {
        id: 106,
        image: FYellow,
        isFlipped: false,
        name: 'ac',
        isMatched: false
    },
    {
        id: 107,
        image: FGreen,
        isFlipped: false,
        name: 'ad',
        isMatched: false
    },
    {
        id: 108,
        image: FGreen,
        isFlipped: false,
        name: 'ad',
        isMatched: false
    },
]

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

export const thirdLevel: ICardMatch[] = [...secondLevel,
    {
        id: 13,
        image: metelli,
        isFlipped: false,
        name: 'g',
        isMatched: false
    },
    {
        id: 14,
        image: metelli,
        isFlipped: false,
        name: 'g',
        isMatched: false
    },
    {
        id: 15,
        image: filtron,
        isFlipped: false,
        name: 'h',
        isMatched: false
    },
    {
        id: 16,
        image: filtron,
        isFlipped: false,
        name: 'h',
        isMatched: false
    },
]

export const fourthLevel: ICardMatch[] = [...thirdLevel,
    {
        id: 17,
        image: victorReinz,
        isFlipped: false,
        name: 'i',
        isMatched: false
    },
    {
        id: 18,
        image: victorReinz,
        isFlipped: false,
        name: 'i',
        isMatched: false
    },
    {
        id: 19,
        image: febi,
        isFlipped: false,
        name: 'j',
        isMatched: false
    },
    {
        id: 20,
        image: febi,
        isFlipped: false,
        name: 'j',
        isMatched: false
    },
]

export const tripleFirstLevel: ICardMatch[] = [
    {
        id: 101,
        image: totalOil,
        isFlipped: false,
        name: 'a',
        isMatched: false
    },
    {
        id: 102,
        image: totalOil,
        isFlipped: false,
        name: 'a',
        isMatched: false
    },
    {
        id: 103,
        image: totalOil,
        isFlipped: false,
        name: 'a',
        isMatched: false
    },
    {
        id: 104,
        image: bluePrint,
        isFlipped: false,
        name: 'b',
        isMatched: false
    },
    {
        id: 105,
        image: bluePrint,
        isFlipped: false,
        name: 'b',
        isMatched: false
    },
    {
        id: 106,
        image: bluePrint,
        isFlipped: false,
        name: 'b',
        isMatched: false
    },
    {
        id: 107,
        image: asMetal,
        isFlipped: false,
        name: 'c',
        isMatched: false
    },
    {
        id: 108,
        image: asMetal,
        isFlipped: false,
        name: 'c',
        isMatched: false
    },
    {
        id: 109,
        image: asMetal,
        isFlipped: false,
        name: 'c',
        isMatched: false
    },
    {
        id: 110,
        image: mannFilter,
        isFlipped: false,
        name: 'd',
        isMatched: false
    },
    {
        id: 111,
        image: mannFilter,
        isFlipped: false,
        name: 'd',
        isMatched: false
    },
    {
        id: 112,
        image: mannFilter,
        isFlipped: false,
        name: 'd',
        isMatched: false
    }
]