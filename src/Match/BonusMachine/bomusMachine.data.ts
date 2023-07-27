import FiltronLogo from '../../assets/images/match/FILTRON.png'
import MahleLogo from '../../assets/images/match/mahle.png'
import BatteryBG from '../../assets/images/match/bg/BatteryBG.jpg'
import oilBG from '../../assets/images/match/bg/oilBG.jpg'
import filterBG from '../../assets/images/match/bg/filterBG.jpg'
import discBG from '../../assets/images/match/bg/discBG.jpg'
import kitBG from '../../assets/images/match/bg/kitBG.jpg'
import BremboLogo from '../../assets/images/match/brembo.jpg'
import GlaserLogo from '../../assets/images/match/glaser.jpg'
import VictorReinzLogo from '../../assets/images/match/victor.jpg'
import ElringLogo from '../../assets/images/match/elring.svg'
import MTexLogo from '../../assets/images/match/MTex.jpg'
import MTexBattery from '../../assets/images/match/MTexBa.jpg'
import MTexOil from '../../assets/images/match/MTexOil.jpg'
import MTexFilter from '../../assets/images/match/MTexFi.jpg'
import MTexDiscs from '../../assets/images/match/MTexDi.jpg'
import MTexKits from '../../assets/images/match/MTexCu.jpg'
import AutoPartsLogo from '../../assets/images/match/Autopart.jpg'
import ExideLogo from '../../assets/images/match/exide.jpg'
import BoshLogo from '../../assets/images/match/bosch.jpg'
import RosneftLogo from '../../assets/images/match/rosneft.jpg'
import TotalLogo from '../../assets/images/match/total.png'
import KroonOilLogo from '../../assets/images/match/kroon-oil.png'
import MeatDoriaLogo from '../../assets/images/match/meat-and-doria.png'
import LynxLogo from '../../assets/images/match/lynxAuto.png'
import MetelliLogo from '../../assets/images/match/metelli.png'

// interface IBonusMachineData {
//     title: string;
//     brands: string[]
//     background: string
// }
//
// export type Product = {
//     name: string;
//     showPicture: boolean;
//     pictureUrl: string;
// };

// export type Category = {
//     [key: string]: Product;
// };
//
// export type Machine = {
//     [key: string]: Category;
// };


export type BrandType = {
    name: string,
    pictureUrl: string,
    showPicture: boolean,
    description: string
}
export type CategoryType = {
    name: string,
    bgImage: string,
    brands: BrandType[],
    active: BrandType

}
export const machineData: CategoryType[] =
    [
    {
        name: 'Аккумулятор',
        bgImage: BatteryBG,
        brands: [{
            name: 'M-Tex_AKK',
            pictureUrl: MTexBattery,
            showPicture: true,
            description: 'Не даёт никаких бонусов'
        },
            {
                name: 'AutoPart',
                pictureUrl: AutoPartsLogo,
                showPicture: false,
                description: 'Увеличивает время прохождения уровня на 3 секунды'
            },
            {
                name: 'Exide',
                pictureUrl: ExideLogo,
                showPicture: false,
                description: 'Увеличивает время прохождения уровня на 6 секунд'
            },
            {
                name: 'Bosch',
                pictureUrl: BoshLogo,
                showPicture: false,
                description: 'Увеличивает время прохождения уровня на 10 секунд'
            },],
        active: {  name: 'M-Tex_AKK',
            pictureUrl: MTexBattery,
            showPicture: true,
            description: 'Не даёт никаких бонусов'}
    },
    {
        name: 'Масло',
        bgImage: oilBG,
        brands: [{
            name: 'M-Tex_MA',
            pictureUrl: MTexOil,
            showPicture: true,
            description: 'Не даёт никаких бонусов'
        },
            {
                name: 'Rosneft',
                pictureUrl: RosneftLogo,
                showPicture: false,
                description: 'Умножает набранные очки на 1.1'
            },
            {
                name: 'Total',
                pictureUrl: TotalLogo,
                showPicture: false,
        description: 'Умножает набранные очки на 1.3'
            },
            {
                name: 'KroonOil',
                pictureUrl: KroonOilLogo,
                showPicture: false,
        description: 'Умножает набранные очки на 1.5'
            },],
        active: {  name: 'M-Tex_MA',
            pictureUrl: MTexOil,
            showPicture: true,
            description: 'Не даёт никаких бонусов'}
    },
    {
        name: 'Фильтр',
        bgImage: filterBG,
        brands: [{
            name: 'M-Tex_Fi',
            pictureUrl: MTexFilter,
            showPicture: true,
        description: 'Не даёт никаких бонусов'
        },
            {
                name: 'MeatDoria',
                pictureUrl: MeatDoriaLogo,
                showPicture: false,
        description: 'Увеличивает время прохождения уровня на 3 секунды'
            },
            {
                name: 'Filtron',
                pictureUrl: FiltronLogo,
                showPicture: false,
        description: 'Увеличивает время прохождения уровня на 6 секунд'
            },
            {
                name: 'Mahle',
                pictureUrl: MahleLogo,
                showPicture: false,
        description: 'Увеличивает время прохождения уровня на 10 секунд'
            },],
        active: {  name: 'M-Tex_Fi',
            pictureUrl: MTexFilter,
            showPicture: true,
            description: 'Не даёт никаких бонусов'}
    },
    {
        name: 'Диски',
        bgImage: discBG,
        brands: [{
            name: 'M-Tex_Di',
            pictureUrl: MTexDiscs,
            showPicture: true,
        description: 'Не даёт никаких бонусов'
        },
            {
                name: 'LYNX',
                pictureUrl: LynxLogo,
                showPicture: false,
        description: 'Умножает набранные очки на 1.1'
            },
            {
                name: 'Metelli',
                pictureUrl: MetelliLogo,
                showPicture: false,
        description: 'Умножает набранные очки на 1.3'
            },
            {
                name: 'Brembo',
                pictureUrl: BremboLogo,
                showPicture: false,
        description: 'Умножает набранные очки на 1.5'
            },],
        active: {  name: 'M-Tex_Di',
            pictureUrl: MTexDiscs,
            showPicture: true,
            description: 'Не даёт никаких бонусов'}
    },
    {
        name: 'Прокладки',
        bgImage: kitBG,
        brands: [{
            name: 'M-Tex_Pr',
            pictureUrl: MTexKits,
            showPicture: true,
        description: 'Не даёт никаких бонусов'
        },
            {
                name: 'Glaser',
                pictureUrl: GlaserLogo,
                showPicture: false,
        description: 'Увеличивает время прохождения уровня на 3 секунды'
            },
            {
                name: 'VictorReinz',
                pictureUrl: VictorReinzLogo,
                showPicture: false,
        description: 'Увеличивает время прохождения уровня на 6 секунд'
            },
            {
                name: 'Elring',
                pictureUrl: ElringLogo,
                showPicture: false,
        description: 'Увеличивает время прохождения уровня на 10 секунд'
            },],
        active: {  name: 'M-Tex_Pr',
            pictureUrl: MTexKits,
            showPicture: true,
            description: 'Не даёт никаких бонусов'}
    }

]

