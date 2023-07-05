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
import AutoPartsLogo from '../../assets/images/match/Autopart.jpg'
import ExideLogo from '../../assets/images/match/exide.jpg'
import BoshLogo from '../../assets/images/match/bosch.jpg'
import RosneftLogo from '../../assets/images/match/rosneft.jpg'
import TotalLogo from '../../assets/images/match/total.png'
import KroonOilLogo from '../../assets/images/match/kroon-oil.png'
import MeatDoriaLogo from '../../assets/images/match/meat-and-doria.png'
import LynxLogo from '../../assets/images/match/lynxAuto.png'
import MetelliLogo from '../../assets/images/match/metelli.png'

interface IBonusMachineData {
    title: string;
    brands: string[]
    background: string
}

export type Product = {
    name: string;
    showPicture: boolean;
    pictureUrl: string;
};

export type Category = {
    [key: string]: Product;
};

export type Machine = {
    [key: string]: Category;
};


export type BrandType = {
    name: string,
    pictureUrl: string,
    showPicture: boolean
}
export type CategoryType = {
    name: string,
    bgImage: string,
    brands: BrandType[]

}
export const machineData: CategoryType[] =
    [
    {
        name: 'Аккумулятор',
        bgImage: BatteryBG,
        brands: [{
            name: 'M-Tex',
            pictureUrl: MTexLogo,
            showPicture: true
        },
            {
                name: 'AutoPart',
                pictureUrl: AutoPartsLogo,
                showPicture: false
            },
            {
                name: 'Exide',
                pictureUrl: ExideLogo,
                showPicture: false
            },
            {
                name: 'Bosch',
                pictureUrl: BoshLogo,
                showPicture: false
            },]
    },
    {
        name: 'Масло',
        bgImage: oilBG,
        brands: [{
            name: 'M-Tex',
            pictureUrl: MTexLogo,
            showPicture: true
        },
            {
                name: 'Rosneft',
                pictureUrl: RosneftLogo,
                showPicture: false
            },
            {
                name: 'Total',
                pictureUrl: TotalLogo,
                showPicture: false
            },
            {
                name: 'KroonOil',
                pictureUrl: KroonOilLogo,
                showPicture: false
            },]
    },
    {
        name: 'Фильтр',
        bgImage: filterBG,
        brands: [{
            name: 'M-Tex',
            pictureUrl: MTexLogo,
            showPicture: true
        },
            {
                name: 'MeatDoria',
                pictureUrl: MeatDoriaLogo,
                showPicture: false
            },
            {
                name: 'Filtron',
                pictureUrl: FiltronLogo,
                showPicture: false
            },
            {
                name: 'Mahle',
                pictureUrl: MahleLogo,
                showPicture: false
            },]
    },
    {
        name: 'Диски',
        bgImage: discBG,
        brands: [{
            name: 'M-Tex',
            pictureUrl: MTexLogo,
            showPicture: true
        },
            {
                name: 'LYNX',
                pictureUrl: LynxLogo,
                showPicture: false
            },
            {
                name: 'Metelli',
                pictureUrl: MetelliLogo,
                showPicture: false
            },
            {
                name: 'Brembo',
                pictureUrl: BremboLogo,
                showPicture: false
            },]
    },
    {
        name: 'Прокладки',
        bgImage: kitBG,
        brands: [{
            name: 'M-Tex',
            pictureUrl: MTexLogo,
            showPicture: true
        },
            {
                name: 'Glaser',
                pictureUrl: GlaserLogo,
                showPicture: false
            },
            {
                name: 'VictorReinz',
                pictureUrl: VictorReinzLogo,
                showPicture: false
            },
            {
                name: 'Elring',
                pictureUrl: ElringLogo,
                showPicture: false
            },]
    }

]

