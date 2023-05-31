import FiltronLogo from '../../assets/images/match/FILTRON.png'
import DenkermannLogo from '../../assets/images/match/denckermann.png'
import MahleLogo from '../../assets/images/match/mahle.png'
import MannLogo from '../../assets/images/match/mann_filter.jpg'
import BluePrintLogo from '../../assets/images/match/Blue_Print.jpg'
import AccumBG from '../../assets/images/match/bg/acccum.jpg'


interface IBonusMachineData {
    title: string;
    brands: string[]
    background: string
}

export const bonusMachineData: IBonusMachineData[] = [
    {
        title: 'Аккумулятор',
        brands: [FiltronLogo, DenkermannLogo,MahleLogo, MannLogo, BluePrintLogo],
        background: AccumBG
    },
    {
        title: 'Моторное масло',
        brands: [FiltronLogo, DenkermannLogo,MahleLogo, MannLogo, BluePrintLogo],
        background: AccumBG
    },
    {
        title: 'Тормозные диски',
        brands: [FiltronLogo, DenkermannLogo,MahleLogo, MannLogo, BluePrintLogo],
        background: AccumBG
    },
    {
        title: 'Фильтр',
        brands: [FiltronLogo, DenkermannLogo,MahleLogo, MannLogo, BluePrintLogo],
        background: AccumBG
    },
    {
        title: 'Прокладки',
        brands: [FiltronLogo, DenkermannLogo,MahleLogo, MannLogo, BluePrintLogo],
        background: AccumBG
    },
];