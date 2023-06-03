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
export const machineData: CategoryType[] = [
    {
        name: 'Battery',
        bgImage: BatteryBG,
        brands: [{
            name: '',
            pictureUrl: DenkermannLogo,
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
        name: 'Oil',
        bgImage: oilBG,
        brands: [{
            name: '',
            pictureUrl: '',
            showPicture: true
        },
            {
                name: '',
                pictureUrl: '',
                showPicture: true
            },
            {
                name: '',
                pictureUrl: '',
                showPicture: true
            },
            {
                name: '',
                pictureUrl: '',
                showPicture: true
            },]
    },
    {
        name: 'Filter',
        bgImage: filterBG,
        brands: [{
            name: '',
            pictureUrl: '',
            showPicture: true
        },
            {
                name: '',
                pictureUrl: '',
                showPicture: true
            },
            {
                name: '',
                pictureUrl: '',
                showPicture: true
            },
            {
                name: '',
                pictureUrl: '',
                showPicture: true
            },]
    },
    {
        name: 'Disc',
        bgImage: discBG,
        brands: [{
            name: '',
            pictureUrl: '',
            showPicture: true
        },
            {
                name: '',
                pictureUrl: '',
                showPicture: true
            },
            {
                name: '',
                pictureUrl: '',
                showPicture: true
            },
            {
                name: '',
                pictureUrl: '',
                showPicture: true
            },]
    },
    {
        name: 'Pads',
        bgImage: kitBG,
        brands: [{
            name: '',
            pictureUrl: '',
            showPicture: true
        },
            {
                name: '',
                pictureUrl: '',
                showPicture: true
            },
            {
                name: '',
                pictureUrl: '',
                showPicture: true
            },
            {
                name: '',
                pictureUrl: '',
                showPicture: true
            },]
    }

]

