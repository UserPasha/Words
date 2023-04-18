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
import CargoFirst from '../assets/images/match/half/cargoFirst.jpg'
import CargoSecond from '../assets/images/match/half/cargoSecond.jpg'
import CortecoFirst from '../assets/images/match/half/CortecoFirst.jpg'
import CortecoSecond from '../assets/images/match/half/CortecoSecond.jpg'
import DaycoFirst from '../assets/images/match/half/DaycoFirst.jpg'
import DaycoSecond from '../assets/images/match/half/DaycoSecond.jpg'
import LemferderFirst from '../assets/images/match/half/lemferderFirst.jpg'
import LemferderSecond from '../assets/images/match/half/lemferderSecond.jpg'
import MandoFirst from '../assets/images/match/half/mandoFirst.jpg'
import MandoSecond from '../assets/images/match/half/mandoSecond.jpg'
import MetelliFirst from '../assets/images/match/half/metelliFirst.jpg'
import MetelliSecond from '../assets/images/match/half/metelliSecond.jpg'
import PolmoOne from '../assets/images/match/Polmo/polmaOne.jpg'
import PolmoTwo from '../assets/images/match/Polmo/polmaTwo.jpeg'
import PolmoThree from '../assets/images/match/Polmo/polmaThree.jpg'
import PolmoFour from '../assets/images/match/Polmo/polmaFour.jpeg'
import PolmoFive from '../assets/images/match/Polmo/PolmoFive.jpeg'
import PolmoSix from '../assets/images/match/Polmo/polmoSix.jpeg'
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

export const tripleSecondLevel: ICardMatch[] = [...tripleFirstLevel,
    {
        id: 113,
        image: glaser,
        isFlipped: false,
        name: 'e',
        isMatched: false
},
    {
        id: 114,
        image: glaser,
        isFlipped: false,
        name: 'e',
        isMatched: false
    },
    {
        id: 115,
        image: glaser,
        isFlipped: false,
        name: 'e',
        isMatched: false
    },
    {
        id: 116,
        image: febi,
        isFlipped: false,
        name: 'f',
        isMatched: false
    },
    {
        id: 117,
        image: febi,
        isFlipped: false,
        name: 'f',
        isMatched: false
    },
    {
        id: 118,
        image: febi,
        isFlipped: false,
        name: 'f',
        isMatched: false
    },{
        id: 119,
        image: victorReinz,
        isFlipped: false,
        name: 'g',
        isMatched: false
    },
    {
        id: 120,
        image: victorReinz,
        isFlipped: false,
        name: 'g',
        isMatched: false
    },
    {
        id: 121,
        image: victorReinz,
        isFlipped: false,
        name: 'g',
        isMatched: false
    },
    {
        id: 122,
        image: metelli,
        isFlipped: false,
        name: 'h',
        isMatched: false
    },
    {
        id: 123,
        image: metelli,
        isFlipped: false,
        name: 'h',
        isMatched: false
    },
    {
        id: 124,
        image: metelli,
        isFlipped: false,
        name: 'h',
        isMatched: false
    },
]

export const halfFirstLevel: ICardMatch[] = [
    {
        id: 201,
        image: CargoFirst,
        isFlipped: false,
        name: 'aa',
        isMatched: false
    },
    {
        id: 202,
        image: CargoSecond,
        isFlipped: false,
        name: 'aa',
        isMatched: false
    },
    {
        id: 203,
        image: CortecoFirst,
        isFlipped: false,
        name: 'ab',
        isMatched: false
    },
    {
        id: 204,
        image: CortecoSecond,
        isFlipped: false,
        name: 'ab',
        isMatched: false
    },
    {
        id: 205,
        image: DaycoFirst,
        isFlipped: false,
        name: 'ac',
        isMatched: false
    },
    {
        id: 206,
        image: DaycoSecond,
        isFlipped: false,
        name: 'ac',
        isMatched: false
    },
    {
        id: 207,
        image: LemferderFirst,
        isFlipped: false,
        name: 'ad',
        isMatched: false
    },
    {
        id: 208,
        image: LemferderSecond,
        isFlipped: false,
        name: 'ad',
        isMatched: false
    },
    {
        id: 209,
        image: MandoFirst,
        isFlipped: false,
        name: 'ae',
        isMatched: false
    },
    {
        id: 210,
        image: MandoSecond,
        isFlipped: false,
        name: 'ae',
        isMatched: false
    },
    {
        id: 211,
        image: MetelliFirst,
        isFlipped: false,
        name: 'af',
        isMatched: false
    },
    {
        id: 212,
        image: MetelliSecond,
        isFlipped: false,
        name: 'af',
        isMatched: false
    },
]

export const polmoFirstLevel : ICardMatch[] = [
    {
        id: 301,
        name: 'ba',
        image: PolmoOne,
        isFlipped: false,
        isMatched: false
    },
    {
        id: 302,
        name: 'ba',
        image: PolmoOne,
        isFlipped: false,
        isMatched: false
    },
    {
        id: 303,
        name: 'bb',
        image: PolmoTwo,
        isFlipped: false,
        isMatched: false
    },
    {
        id: 304,
        name: 'bb',
        image: PolmoTwo,
        isFlipped: false,
        isMatched: false
    },
    {
        id: 305,
        name: 'bc',
        image: PolmoThree,
        isFlipped: false,
        isMatched: false
    },
    {
        id: 306,
        name: 'bc',
        image: PolmoThree,
        isFlipped: false,
        isMatched: false
    },
    {
        id: 307,
        name: 'bd',
        image: PolmoFour,
        isFlipped: false,
        isMatched: false
    },
    {
        id: 308,
        name: 'bd',
        image: PolmoFour,
        isFlipped: false,
        isMatched: false
    },
    {
        id: 309,
        name: 'be',
        image: PolmoFive,
        isFlipped: false,
        isMatched: false
    },
    {
        id: 310,
        name: 'be',
        image: PolmoFive,
        isFlipped: false,
        isMatched: false
    },
    {
        id: 311,
        name: 'bf',
        image: PolmoSix,
        isFlipped: false,
        isMatched: false
    },
    {
        id: 312,
        name: 'bf',
        image: PolmoSix,
        isFlipped: false,
        isMatched: false
    },

]