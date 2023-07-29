import FiltronLogo from '../../assets/images/match/FILTRON.png'
import FiltronLogoDraft from '../../assets/images/match/FiltronLogoDraft.svg'
import MahleLogo from '../../assets/images/match/mahle.png'
import MahleLogoDraft from '../../assets/images/match/MahleLogoDraft.svg'
import BatteryBG from '../../assets/images/match/bg/BatteryBG.jpg'
import oilBG from '../../assets/images/match/bg/oilBG.jpg'
import OilNewBG from '../../assets/images/match/bg/oilNewBG.jpg'
import filterBG from '../../assets/images/match/bg/filterBG.jpg'
import filterNewBG from '../../assets/images/match/bg/filterNewBG.jpg'
import discBG from '../../assets/images/match/bg/discBG.jpg'
import diskNewBG from '../../assets/images/match/bg/discNewBD.jpg'
import kitBG from '../../assets/images/match/bg/kitBG.jpg'
import kitsNewBG from '../../assets/images/match/bg/KitsNewBG.jpg'
import BremboLogo from '../../assets/images/match/brembo.jpg'
import BremboLogoDraft from '../../assets/images/match/BremboDraft.svg'
import GlaserLogo from '../../assets/images/match/glaser.jpg'
import GlaserLogoDraft from '../../assets/images/match/GlaserBlack.svg'
import VictorReinzLogo from '../../assets/images/match/victor.svg'
import VictorReinzDraft from '../../assets/images/match/VictorDraft.svg'
import ElringLogo from '../../assets/images/match/elring.svg'
import ElringLogoDraft from '../../assets/images/match/ElringDraft.svg'
import MTexLogo from '../../assets/images/match/MTex.jpg'
import MTexFix from '../../assets/images/match/MTexFixingLogoBatt.svg'
import MTexLogoDraft from '../../assets/images/match/MTexBlack.svg'
import MTexBattery from '../../assets/images/match/MTexBattery .svg'
import MTexOil from '../../assets/images/match/MTexOil.jpg'
import MTexFilter from '../../assets/images/match/MTexFi.jpg'
import MTexDiscs from '../../assets/images/match/MTexDi.jpg'
import MTexKits from '../../assets/images/match/MTexCu.jpg'
import AutoPartsLogo from '../../assets/images/match/AutoPart.svg'
import AutopartsLogoDraft from '../../assets/images/match/AutoPartsLogoDraft.svg'
import ExideLogo from '../../assets/images/match/Exide.svg'
import ExideLogoDraft from '../../assets/images/match/ExideLogoDraft.svg'
import BoshLogo from '../../assets/images/match/Bosch.svg'
import BocshLogoDraft from '../../assets/images/match/BoschLogoDraft.svg'
import RosneftLogo from '../../assets/images/match/rosneft.jpg'
import RosneftLogoDraft from '../../assets/images/match/RosneftDraft.svg'
import TotalLogo from '../../assets/images/match/total.png'
import TotalLogoDraft from '../../assets/images/match/TotalDraft.svg'
import KroonOilLogo from '../../assets/images/match/kroon-oil.png'
import KroonOilBlack from '../../assets/images/match/KroonOilBlack.svg'
import MeatDoriaLogo from '../../assets/images/match/meat-and-doria.png'
import MeatAndDoriaLogoDraft from '../../assets/images/match/Meat&DoriaDraft.svg'
import LynxLogo from '../../assets/images/match/lynxAuto.png'
import LynxLogoDraft from '../../assets/images/match/LynxDraft.svg'
import MetelliLogo from '../../assets/images/match/metelli.png'
import MetelliLogoDraft from '../../assets/images/match/MetelliDraft.svg'

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
    draft: string,
    showPicture: boolean,
    description: string,
    bonusType: 'seconds'| "multiply",
    bonus: number
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
            pictureUrl: MTexFix,
            draft: MTexLogoDraft,
            showPicture: true,
            description: 'Не даёт никаких бонусов',
            bonusType: "seconds",
            bonus: 0
        },
            {
                name: 'AutoPart',
                pictureUrl: AutoPartsLogo,
                draft: AutopartsLogoDraft,
                showPicture: false,
                description: 'Увеличивает время прохождения уровня на 3 секунды',
                bonusType: "seconds",
                bonus: 3
            },
            {
                name: 'Exide',
                pictureUrl: ExideLogo,
                draft: ExideLogoDraft,
                showPicture: false,
                description: 'Увеличивает время прохождения уровня на 6 секунд',
                bonusType: "seconds",
                bonus: 6
            },
            {
                name: 'Bosch',
                pictureUrl: BoshLogo,
                draft: BocshLogoDraft,
                showPicture: false,
                description: 'Увеличивает время прохождения уровня на 10 секунд',
                bonusType: "seconds",
                bonus: 10
            },],
        active: {  name: 'M-Tex_AKK',
            pictureUrl: MTexBattery,
            draft: MTexLogoDraft,
            showPicture: true,
            description: 'Не даёт никаких бонусов',
            bonusType: "seconds",
            bonus: 0}
    },
    {
        name: 'Масло',
        bgImage: OilNewBG,
        brands: [{
            name: 'M-Tex_MA',
            pictureUrl: MTexOil,
            draft: MTexLogoDraft,
            showPicture: true,
            description: 'Не даёт никаких бонусов',
            bonusType: "multiply",
            bonus: 1
        },
            {
                name: 'Rosneft',
                pictureUrl: RosneftLogo,
                draft: RosneftLogoDraft,
                showPicture: false,
                description: 'Умножает набранные очки на 1.1',
                bonusType: "multiply",
                bonus: 1.1
            },
            {
                name: 'Total',
                pictureUrl: TotalLogo,
                draft: TotalLogoDraft,
                showPicture: false,
        description: 'Умножает набранные очки на 1.3',
                bonusType: "multiply",
                bonus: 1.3
            },
            {
                name: 'Kroon Oil',
                pictureUrl: KroonOilLogo,
                draft: KroonOilBlack,
                showPicture: false,
        description: 'Умножает набранные очки на 1.5',
                bonusType: "multiply",
                bonus: 1.5
            },],
        active: {  name: 'M-Tex_MA',
            pictureUrl: MTexOil,
            draft: MTexLogoDraft,
            showPicture: true,
            description: 'Не даёт никаких бонусов',
            bonusType: "multiply",
            bonus: 1}
    },
    {
        name: 'Фильтр',
        bgImage: filterNewBG,
        brands: [{
            name: 'M-Tex_Fi',
            pictureUrl: MTexFilter,
            draft: MTexLogoDraft,
            showPicture: true,
        description: 'Не даёт никаких бонусов',
            bonusType: "seconds",
            bonus: 0
        },
            {
                name: 'Meat & Doria',
                pictureUrl: MeatDoriaLogo,
                draft: MeatAndDoriaLogoDraft,
                showPicture: false,
        description: 'Увеличивает время прохождения уровня на 3 секунды',
                bonusType: "seconds",
                bonus: 3
            },
            {
                name: 'Filtron',
                pictureUrl: FiltronLogo,
                draft: FiltronLogoDraft,
                showPicture: false,
        description: 'Увеличивает время прохождения уровня на 6 секунд',
                bonusType: "seconds",
                bonus: 6
            },
            {
                name: 'Mahle',
                pictureUrl: MahleLogo,
                draft: MahleLogoDraft,
                showPicture: false,
        description: 'Увеличивает время прохождения уровня на 10 секунд',
                bonusType: "seconds",
                bonus: 10
            },],
        active: {  name: 'M-Tex_Fi',
            pictureUrl: MTexFilter,
            draft: MTexLogoDraft,
            showPicture: true,
            description: 'Не даёт никаких бонусов',
            bonusType: "seconds",
            bonus: 0}
    },
    {
        name: 'Диски',
        bgImage: diskNewBG,
        brands: [{
            name: 'M-Tex_Di',
            pictureUrl: MTexDiscs,
            draft: MTexLogoDraft,
            showPicture: true,
        description: 'Не даёт никаких бонусов',
            bonusType: "multiply",
            bonus: 1
        },
            {
                name: 'LYNX',
                pictureUrl: LynxLogo,
                draft: LynxLogoDraft,
                showPicture: false,
        description: 'Умножает набранные очки на 1.1',
                bonusType: "multiply",
                bonus: 1.1
            },
            {
                name: 'Metelli',
                pictureUrl: MetelliLogo,
                draft: MetelliLogoDraft,
                showPicture: false,
        description: 'Умножает набранные очки на 1.3',
                bonusType: "multiply",
                bonus: 1.3
            },
            {
                name: 'Brembo',
                pictureUrl: BremboLogo,
                draft: BremboLogoDraft,
                showPicture: false,
        description: 'Умножает набранные очки на 1.5',
                bonusType: "multiply",
                bonus: 1.5
            },],
        active: {  name: 'M-Tex_Di',
            pictureUrl: MTexDiscs,
            draft: MTexLogoDraft,
            showPicture: true,
            description: 'Не даёт никаких бонусов',
            bonusType: "multiply",
            bonus: 1}
    },
    {
        name: 'Прокладки',
        bgImage: kitsNewBG,
        brands: [{
            name: 'M-Tex_Pr',
            pictureUrl: MTexKits,
            draft: MTexLogoDraft,
            showPicture: true,
        description: 'Не даёт никаких бонусов',
            bonusType: "seconds",
            bonus: 0
        },
            {
                name: 'Glaser',
                pictureUrl: GlaserLogo,
                draft: GlaserLogoDraft,
                showPicture: false,
        description: 'Увеличивает время прохождения уровня на 3 секунды',
                bonusType: "seconds",
                bonus: 3
            },
            {
                name: 'Victor Reinz',
                pictureUrl: VictorReinzLogo,
                draft: VictorReinzDraft,
                showPicture: false,
        description: 'Увеличивает время прохождения уровня на 6 секунд',
                bonusType: "seconds",
                bonus: 6
            },
            {
                name: 'Elring',
                pictureUrl: ElringLogo,
                draft: ElringLogoDraft,
                showPicture: false,
        description: 'Увеличивает время прохождения уровня на 10 секунд',
                bonusType: "seconds",
                bonus: 10
            },],
        active: {  name: 'M-Tex_Pr',
            pictureUrl: MTexKits,
            draft: MTexLogoDraft,
            showPicture: true,
            description: 'Не даёт никаких бонусов',
            bonusType: "seconds",
            bonus: 0}
    }

]

