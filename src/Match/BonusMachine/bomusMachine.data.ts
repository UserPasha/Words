import FiltronLogo from '../../assets/images/match/FILTRON.png'
import DenkermannLogo from '../../assets/images/match/denckermann.png'
import MahleLogo from '../../assets/images/match/mahle.png'
import MannLogo from '../../assets/images/match/mann_filter.jpg'
import BluePrintLogo from '../../assets/images/match/Blue_Print.jpg'
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
        name: 'Battery',
        bgImage: BatteryBG,
        brands: [{
            name: 'M-Tex',
            pictureUrl: MTexLogo,
            showPicture: true
        },
            {
                name: '',
                pictureUrl: FiltronLogo,
                showPicture: false
            },
            {
                name: '',
                pictureUrl: MahleLogo,
                showPicture: false
            },
            {
                name: '',
                pictureUrl: MannLogo,
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
                name: '',
                pictureUrl: '',
                showPicture: false
            },
            {
                name: '',
                pictureUrl: '',
                showPicture: false
            },
            {
                name: '',
                pictureUrl: '',
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
                name: '',
                pictureUrl: '',
                showPicture: false
            },
            {
                name: '',
                pictureUrl: '',
                showPicture: false
            },
            {
                name: '',
                pictureUrl: '',
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
                name: '',
                pictureUrl: '',
                showPicture: false
            },
            {
                name: '',
                pictureUrl: '',
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
                name: 'Victor Reinz',
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

