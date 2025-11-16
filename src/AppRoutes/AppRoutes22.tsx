import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {Cards} from "../Cards/Cards";
import {CurrentCard} from "../CurrentCard/CurrentCard";
import {Home} from "../Home/Home";
import {Search} from "../Search/Search";
import {TestComponent} from "../TestComponent/TestComponent";
import {Game} from "../Game/Game";
import {Match} from "../Match/Match";
import {
    carsByModelsFirstLevel, carsByModelsFourthLevel,
    carsByModelsSecondLevel, carsByModelsThirdLevel,
    circleLevel,
    classicPatternOneCards,
    classicPatternOneLevel,
    classicPatternSecondLevel,
    classicPatternThirdLevel, classicPatternThreeCards,
    classicPatternTwoCards,
    fifthLevel,
    filtronMix,
    firstLevel,
    firstPatrickLevel,
    fourthLevel, fourthPatrickLevel,
    halfFirstLevel, halfFourthLevel,
    halfSecondLevel, halfThirdLevel,
    patternFirstLevel,
    patternFirstLevelCards,
    //patternPatrickRotateTest,
    patternSecondLevel,
    patternSecondLevelCards,
    polmoFirstLevel, polmoFourhLevel,
    polmoSecondLevel,
    polmoThirdLevel,
    reFlipFirstLevel, reFlipFourthLevel,
    reFlipSecondLevel, reFlipThirdLevel,
    rotateFirstLevel, rotateFourthLevel,
    rotateSecondLevel,
    rotateThirdLevel,
    secondLevel,
    secondPatrickLevel,
    // testPatternFirstLevel,
    thirdLevel, thirdPatrickLevel,
    tripleFirstLevel,
    tripleSecondLevel
} from "../Match/Levels";
import {GameBoard} from "../Match/Gameboard";
import {TripleMatch} from "../TripleMatch/TripleMatch";
import {TripleMatchCopy} from "../TripleMatch/TripleMatchCopy";
import {Circle} from "../Match/Circle";
import {MatchReFlip} from "../Match/MatchReFlip";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";
import {Profile} from "../Profile/Profile";
import {Shop} from "../Match/Shop/Shop";
import {PackOpener} from "../Pack/PackOpener";
import {TokenCreator} from "../Match/Shop/TokenCreator";
import {Settings} from "../Settings/Settings";
import {NewGame} from "../Game/NewGame";
import {Categories} from "../Game/Categories";
import {StartMenu} from "../Game/StartMenu";
import {SmartListComponent} from "../Home/Batis";


export type CategoryNameAndPathType = {
    name: string
    path: string
    isCompletedCategory: boolean
}

export type CategorySongsType = {
    tractTitle: string
    track: string
    original: string
    trackName: string
    isComplete: boolean
}


let token = TokenCreator()
export const PATH = {
    HOME: '/',
    CARDS: '/cards',
    WORD: '/word',
    SEARCH: '/search',
    TEST: '/secret',
    GAME: '/game',
    MATCH: '/match',
    FILTRON: '/filtron',
    ONE: '/classicOnee',
    TWO: '/classicTtwo',
    THREE: '/classicsthree',
    FOUR: '/classicfourrr',
    FIVE: '/classicGfive',
    HALFONE: '/halfOne',
    HALFTWO: '/halfTwoTwo',
    HALFTHREE: '/halfThreee',
    HALFFOUR: '/halffourPart',
    CLASSICWITHROTATEONE: '/claRotOne',
    CLASSICWITHROTATETWO: '/clRoTw',
    CLASSICWITHROTATETHREE: '/cloassRotaTg',
    CLASSICWITHROTATEFOUR: '/crf',
    TRIPLEMATCHONE: '/tripleMatchOne',
    THREEMATCHESTWO: '/threeMatchesTwo',
    THREEMATCHESTWOROTATEONE: '/threeMatchesTwoRotateOne',
    THREEMATCHESTWOROTATETWO: '/threeMatchesTwoRotateTwo',
    POLMOONE: '/polmoOne',
    POLMOTWO: '/polmoTwo',
    POLMOTHREE: '/polmoThree',
    POLMOFOUR: '/plmfr',
    CLASSICPATTERNONE: '/clpatternOne',
    CLASSICPATTERNTWO: '/asspatternTwo',
    CLASSICPATTERNTHREE: '/icpatternTh',
    CLASSICPATTERNFOUR: '/clppatternfo',
    REFLIPONE: '/reflipOne',
    REFLIPTWO: '/reflipTwo',
    REFLIPTHREE: '/refliptr',
    REFLIPFOUR: '/refFo',

    CARSBYMODELSONE: '/carsByModelsOne',
    CARSBYMODELSTWO: '/carsModelsTwo',
    CARSBYMODELSTHREE: '/ByModelsThree',
    CARSBYMODELSFOUR: '/autocarsModelsFour',
    PATRICKFIRST: '/patrickFirst',
    PATRICKSECOND: '/patrickSecond',
    PATRICKTHIRD: '/patrickThird',
    PATRICKFOUR: '/patrickFFor',
    ROTATEPATTERNONE: '/rotatePatternOne',
    ROTATEPATTERNTWO: '/rotatePatternTwo',
    PATRICKROTATEONE: '/patrickRotate',
    PATRICKROTATETWO: '/patrickRotateTwo',
    TESTPATTERN: '/testPatt',
    CRAZYONE: '/crazyOne',
    //PATRPATTROT: '/ppr',
    CIRCLE: '/circle',
    ROTATECIRCLE: '/rotateCircle',
    MODAL: '/modal',
    TRIPLETSET: '/tripletest',
    PROFILE: '/profile',
    PACKOPENER: `/packOpener+${token}`,
    SHOP: '/shop',
    SETTINGS: '/gameSettings',

    BATIS:'/batis',

    NEWGAMEZERO: '/newgameZero',
    CATEGORIES: '/categories',
    CATEGORIEONE: '/categoryOne',

    STARTMENU: '/startmenu',

    ROUNDZERO: '/roundZero',
    ROUNDONE: '/roundOne',
    ROUNDTWO: '/roundTwo',
    ROUNDTHREE: '/roundThree',
    ROUNDFOUR: '/roundFour',
    ROUNDFIVE: '/roundFive',
    ROUNDSIX: '/roundSix',
    ROUNDSEVEN: '/roundSeven',
    ROUNDEIGHT: '/roundEight',
    ROUNDNINE: '/roundNine',


    SUMMERCATEGORY: '/summerCategory',
    WINTERCATEGORY: '/winterCategory',
    MENNAMESCATEGORY: '/menNamesCategory',
    RUSSIANROCK: '/russianRock',
    ZEROMOVIES: '/zeroMovies',
    DIGITSCATEGORY: '/digitsCategory',
    DRINKSCATEGORY: '/drinksCategory',
    WOMENNAMES: '/womanNames',
    SERIALSCATEGORY: '/serialsCategory',
    AIREMIXESONE: '/AIRemixesCategoryOne',
    NINTYSHITS: '/nintysHits',
    MODERNCATHEGOTY: '/modernCategory',
    CARSCATEGORY: '/carsCategory',
    SHOWSCATEGORY: '/showsCategory',
    AIREMIXESTWO: '/AIRemixesCategoryTwo',
    FOREIGNRETRO: '/foreignRetro',
    FLOWERS: '/flowers',
    FOREIGNROCK: '/foreignRock',
    MOVIESTWO: '/moviesTwo',
    WOMENNAMESTWO: '/womenNamesTwo',
    CITIES: '/cities',
    RUSROCKTWO: '/rusRockTwo',
    MENSNAMESTWO: '/mensNamesTwo',
    SERIALSTWO: '/serialsTwo',
    AIREMIXESTHREE: '/AIRemixesThree',
    MODERNTWO: '/modernTwo',
    NINTYTWO: '/nintyTwo',
    NIGHTCATEGORY: '/nightGategory',
    MOVIESTHREE: '/moviesThree',
    AIREMIXESFOUR: '/AIRemixesFour',
    MODERNTHREE: '/modernThree',
    HITS2000: '/hits2000',
    FOREIGNROCKTWO: '/foreignRockTwo',
    FOREIGNRAP: '/foreignRap',
    FOREIGNPOP: '/ForeignPop',
    MODEERNFOUR: '/modernFour',
    COLORS: '/colors',
    LOVES: '/loves',
    MOVIESFOUR: '/moviesFour',
    AIRFIVE: '/AIRFive',
    NINTYSHITS2: '/nintysHits2',
    WOMENNAMESTHREE: '/womenNamesThree',
    DIGITSCATEGORY2: '/digitsCategory2',
    AUTUMN: '/autumn',
    RUSSIANROCK2: '/russianRock2',
    NINTYSHITS3: '/nintysHits3',
    TWENTYHITS: '/twentyHits',
    SPRING: '/spring',
    EDIBLE: '/edible',
    FOREIGNRETRO2: '/foreignRetro2',


}

const levels = [
    {
        path: PATH.ONE,
        component: Match,
        cardsToPlay: firstLevel,
        duration: 30,
        nextPath: PATH.TWO,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 0,
        defaultPoints: 100,
    },
    {
        path: PATH.TWO,
        component: Match,
        cardsToPlay: secondLevel,
        duration: 40,
        nextPath: PATH.POLMOONE,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 1,
        defaultPoints: 120,
    },
    {
        path: PATH.POLMOONE,
        component: Match,
        cardsToPlay: polmoFirstLevel,
        duration: 45,
        nextPath: PATH.FILTRON,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 2,
        defaultPoints: 150,
    },
    {
        path: PATH.FILTRON,
        component: Match,
        cardsToPlay: filtronMix,
        duration: 20,
        nextPath: PATH.THREE,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 3,
        defaultPoints: 200,
    },
    {
        path: PATH.THREE,
        component: Match,
        cardsToPlay: thirdLevel,
        duration: 50,
        nextPath: PATH.FOUR,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 4,
        defaultPoints: 150,
    },
    {
        path: PATH.FOUR,
        component: Match,
        cardsToPlay: fourthLevel,
        duration: 60,
        nextPath: PATH.POLMOTWO,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 5,
        defaultPoints: 180,
    },
    {
        path: PATH.POLMOTWO,
        component: Match,
        cardsToPlay: polmoSecondLevel,
        duration: 65,
        nextPath: PATH.HALFONE,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 6,
        defaultPoints: 210,
    },
    {
        path: PATH.HALFONE,
        component: Match,
        cardsToPlay: halfFirstLevel,
        duration: 30,
        nextPath: PATH.FIVE,
        rotate: false,
        description: 'Найти вторую половину',
        levelNumber: 7,
        defaultPoints: 200,
    },
    {
        path: PATH.FIVE,
        component: Match,
        cardsToPlay: fifthLevel,
        duration: 70,
        nextPath: PATH.REFLIPONE,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 8,
        defaultPoints: 200,
    },
    {
        path: PATH.REFLIPONE,
        component: Match,
        cardsToPlay: reFlipFirstLevel,
        duration: 40,
        nextPath: PATH.POLMOTHREE,
        rotate: false,
        description: 'Два документа',
        levelNumber: 9,
        defaultPoints: 160,
    },
    {
        path: PATH.POLMOTHREE,
        component: Match,
        cardsToPlay: polmoThirdLevel,
        duration: 100,
        nextPath: PATH.HALFTWO,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 10,
        defaultPoints: 300,
    },
    {
        path: PATH.HALFTWO,
        component: Match,
        cardsToPlay: halfSecondLevel,
        duration: 70,
        nextPath: PATH.REFLIPTWO,
        rotate: false,
        description: 'Найти вторую половину',
        levelNumber: 11,
        defaultPoints: 200,
    },
    {
        path: PATH.REFLIPTWO,
        component: MatchReFlip,
        cardsToPlay: reFlipSecondLevel,
        duration: 90,
        nextPath: PATH.CIRCLE,
        rotate: false,
        description: 'Два документа',
        levelNumber: 12,
        defaultPoints: 200,
    },
    {
        path: PATH.CIRCLE,
        component: Circle,
        cardsToPlay: circleLevel,
        duration: 110,
        nextPath: PATH.TRIPLEMATCHONE,
        rotate: false,
        description: 'Крутящий момент',
        levelNumber: 13,
        defaultPoints: 200,
    },
    {
        path: PATH.TRIPLEMATCHONE,
        component: TripleMatch,
        cardsToPlay: tripleFirstLevel,
        duration: 50,
        nextPath: PATH.CARSBYMODELSONE,
        rotate: false,
        description: 'Масовка',
        levelNumber: 14,
        defaultPoints: 160,
    },
    {
        path: PATH.CARSBYMODELSONE,
        component: Match,
        cardsToPlay: carsByModelsFirstLevel,
        duration: 30,
        nextPath: PATH.THREEMATCHESTWO,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 15,
        defaultPoints: 200,
    },

    {
        path: PATH.CARSBYMODELSTWO,
        component: Match,
        cardsToPlay: carsByModelsSecondLevel,
        duration: 45,
        nextPath: PATH.THREEMATCHESTWOROTATEONE,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 19,
        defaultPoints: 200,
    },
    {
        path: PATH.THREEMATCHESTWOROTATEONE,
        component: TripleMatch,
        cardsToPlay: tripleFirstLevel,
        duration: 40,
        nextPath: PATH.THREEMATCHESTWOROTATETWO,
        rotate: true,
        description: 'Пьяная масовка',
        levelNumber: 20,
        defaultPoints: 200,
    },
    {
        path: PATH.THREEMATCHESTWOROTATETWO,
        component: TripleMatch,
        cardsToPlay: tripleSecondLevel,
        duration: 120,
        nextPath: PATH.CRAZYONE,
        rotate: true,
        description: 'Пьяная масовка',
        levelNumber: 21,
        defaultPoints: 240,
    },
    {
        path: PATH.CRAZYONE,
        component: TripleMatchCopy,
        cardsToPlay: patternSecondLevel,
        patternCards: true,
        duration: 180,
        nextPath: PATH.MATCH,
        rotate: true,
        isChangedSize: true,
        description: 'Пьяная масовка по документу',
        levelNumber: 22,
        defaultPoints: 260,
    },
];

const AppRoutes22 = () => {


    const expiredToken = useSelector<RootState, string>(state => state.bonus.token)
    const dispatch = useDispatch<AppDispatch>();
    const [bestLevel, setBestLevel] = useState<number>(
        () => {
            const storedValue = localStorage.getItem('bestLevel');
            return storedValue ? JSON.parse(storedValue) : 1;
        }
    )

    useEffect(() => {
        let bestLevelAsString = localStorage.getItem("bestLevel")
        if (bestLevelAsString) {
            let newValue = JSON.parse(bestLevelAsString)
            setBestLevel(newValue);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('bestLevel', JSON.stringify(bestLevel));
    }, [bestLevel]);

    useEffect(() => {
        let bestLevelAsString = localStorage.getItem("bestLevel")
        if (bestLevelAsString) {
            let newValue = JSON.parse(bestLevelAsString)
            setBestLevel(newValue);
        }
    }, [])


    return (
        <>
            <Routes>
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.CARDS} element={<Cards/>}/>
                <Route path={PATH.WORD} element={<CurrentCard/>}/>
                <Route path={PATH.SEARCH} element={<Search/>}/>
                <Route path={PATH.TEST} element={<TestComponent/>}/>
                <Route path={PATH.GAME} element={<Game/>}/>
                <Route path={PATH.PACKOPENER} element={<PackOpener/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.SHOP} element={<Shop/>}/>
                <Route path={PATH.SETTINGS} element={<Settings/>}/>


                <Route path={PATH.MATCH} element={<GameBoard bestLevel={bestLevel}/>}/>



                         <Route path={PATH.ONE}
                       element={<Match cardsToPlay={firstLevel}
                                       path={PATH.TWO}
                                       duration={30}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={0}
                                       defaultPoints={100}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}

                       />}/>

                <Route path={PATH.TWO}
                       element={<Match
                           cardsToPlay={secondLevel}
                           path={PATH.POLMOONE}
                           duration={40}
                           rotate={false}
                           description={'Найти пару'}
                           bestLevel={bestLevel}
                           setBestLevel={setBestLevel}
                           levelNumber={1}
                           defaultPoints={150}
                           isPatrickMode={false}
                           isPattern={false}
                           patternCards={[]}

                       />}/>

                <Route path={PATH.POLMOONE}
                       element={<Match cardsToPlay={polmoFirstLevel}
                                       duration={45}
                                       path={PATH.FILTRON}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={2}
                                       defaultPoints={150}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>


                <Route path={PATH.FILTRON}
                       element={<Match
                           cardsToPlay={filtronMix}
                           path={PATH.THREE}
                           duration={20}
                           rotate={false}
                           description={'Найти пару'}
                           bestLevel={bestLevel}
                           setBestLevel={setBestLevel}
                           levelNumber={3}
                           defaultPoints={200}
                           isPatrickMode={false}
                           isPattern={false}
                           patternCards={[]}
                       />}/>

                <Route path={PATH.THREE}
                       element={<Match
                           cardsToPlay={thirdLevel}
                           path={PATH.FOUR}
                           duration={45}
                           rotate={false}
                           description={'Найти пару'}
                           bestLevel={bestLevel}
                           setBestLevel={setBestLevel}
                           levelNumber={4}
                           defaultPoints={180}
                           isPatrickMode={false}
                           isPattern={false}
                           patternCards={[]}

                       />}/>

                <Route path={PATH.FOUR}
                       element={<Match cardsToPlay={fourthLevel}
                                       path={PATH.POLMOTWO}
                                       duration={60}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={5}
                                       defaultPoints={200}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>

                <Route path={PATH.POLMOTWO}
                       element={<Match cardsToPlay={polmoSecondLevel}
                                       duration={65}
                                       path={PATH.HALFONE}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={6}
                                       defaultPoints={210}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>

                <Route path={PATH.HALFONE}
                       element={<Match cardsToPlay={halfFirstLevel}
                                       duration={30}
                                       path={PATH.CLASSICWITHROTATEONE}
                                       rotate={false}
                                       description={'Найти вторую половину'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={7}
                                       defaultPoints={160}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>

                <Route path={PATH.CLASSICWITHROTATEONE}
                       element={<Match cardsToPlay={rotateFirstLevel}
                                       path={PATH.CLASSICWITHROTATETWO}
                                       duration={45}
                                       rotate={true}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={8}
                                       defaultPoints={170}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>


                <Route path={PATH.CLASSICWITHROTATETWO}
                       element={<Match cardsToPlay={rotateSecondLevel}
                                       path={PATH.POLMOTHREE}
                                       duration={60}
                                       rotate={true}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={9}
                                       defaultPoints={200}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>

                <Route path={PATH.POLMOTHREE}
                       element={<Match cardsToPlay={polmoThirdLevel}
                                       duration={90}
                                       path={PATH.CARSBYMODELSONE}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={10}
                                       defaultPoints={280}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>

                <Route path={PATH.CARSBYMODELSONE}
                       element={<Match cardsToPlay={carsByModelsFirstLevel}
                                       duration={45}
                                       path={PATH.CLASSICWITHROTATETHREE}
                                       rotate={false}
                                       description={'Найти марку и модель автомобиля'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={11}
                                       defaultPoints={180}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>

                <Route path={PATH.CLASSICWITHROTATETHREE}
                       element={<Match cardsToPlay={rotateThirdLevel}
                                       duration={95}
                                       path={PATH.FIVE}
                                       rotate={true}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={12}
                                       defaultPoints={260}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>

                <Route path={PATH.FIVE}
                       element={<Match cardsToPlay={fifthLevel}
                                       duration={90}
                                       path={PATH.CLASSICPATTERNONE}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={13}
                                       defaultPoints={270}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>

                <Route path={PATH.CLASSICPATTERNONE}
                       element={<Match cardsToPlay={classicPatternOneLevel}
                                       duration={40}
                                       path={PATH.HALFTWO}
                                       rotate={false}
                                       description={'Найти пару в определенном порядке'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={14}
                                       defaultPoints={160}
                                       isPatrickMode={false}
                                       isPattern={true}
                                       patternCards={classicPatternOneCards}
                       />}/>

                <Route path={PATH.HALFTWO}
                       element={<Match cardsToPlay={halfSecondLevel}
                                       duration={45}
                                       path={PATH.CLASSICPATTERNTWO}
                                       rotate={false}
                                       description={'Найти вторую половину'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={15}
                                       defaultPoints={190}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>

                <Route path={PATH.CLASSICPATTERNTWO}
                       element={<Match cardsToPlay={classicPatternSecondLevel}
                                       duration={70}
                                       path={PATH.CLASSICPATTERNTHREE}
                                       rotate={false}
                                       description={'Найти пару в определенном порядке'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={16}
                                       defaultPoints={230}
                                       isPatrickMode={false}
                                       isPattern={true}
                                       patternCards={classicPatternTwoCards}
                       />}/>

                <Route path={PATH.CLASSICPATTERNTHREE}
                       element={<Match cardsToPlay={classicPatternThirdLevel}
                                       duration={100}
                                       path={PATH.CLASSICWITHROTATEFOUR}
                                       rotate={false}
                                       description={'Найти пару в определенном порядке'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={17}
                                       defaultPoints={250}
                                       isPatrickMode={false}
                                       isPattern={true}
                                       patternCards={classicPatternThreeCards}
                       />}/>

                <Route path={PATH.CLASSICWITHROTATEFOUR}
                       element={<Match cardsToPlay={rotateFourthLevel}
                                       duration={110}
                                       path={PATH.CARSBYMODELSTWO}
                                       rotate={true}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={18}
                                       defaultPoints={240}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>


                <Route path={PATH.CARSBYMODELSTWO}
                       element={<Match cardsToPlay={carsByModelsSecondLevel}
                                       duration={45}
                                       path={PATH.PATRICKFIRST}
                                       rotate={false}
                                       description={'Найти марку и модель автомобиля'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={19}
                                       defaultPoints={200}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>


                <Route path={PATH.PATRICKFIRST}
                       element={<Match cardsToPlay={firstPatrickLevel}
                                       path={PATH.PATRICKSECOND}
                                       duration={50}
                                       rotate={false}
                                       description={'Патрик перемешивает поле, старший смены помогает найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={20}
                                       defaultPoints={130}
                                       isPatrickMode={true}
                                       isPattern={false}
                                       patternCards={[]}

                       />}/>

                <Route path={PATH.PATRICKSECOND}
                       element={<Match cardsToPlay={secondPatrickLevel}
                                       path={PATH.PATRICKTHIRD}
                                       duration={85}
                                       rotate={false}
                                       description={'Патрик перемешивает поле, старший смены помогает найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={21}
                                       defaultPoints={170}
                                       isPatrickMode={true}
                                       isPattern={false}
                                       patternCards={[]}

                       />}/>

                <Route path={PATH.PATRICKTHIRD}
                       element={<Match cardsToPlay={thirdPatrickLevel}
                                       path={PATH.HALFTHREE}
                                       duration={110}
                                       rotate={false}
                                       description={'Патрик перемешивает поле, старший смены помогает найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={22}
                                       defaultPoints={220}
                                       isPatrickMode={true}
                                       isPattern={false}
                                       patternCards={[]}

                       />}/>

                <Route path={PATH.HALFTHREE}
                       element={<Match cardsToPlay={halfThirdLevel}
                                       duration={90}
                                       path={PATH.REFLIPONE}
                                       rotate={false}
                                       description={'Найти вторую половину'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={23}
                                       defaultPoints={250}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>


                <Route path={PATH.REFLIPONE}
                       element={<MatchReFlip cardsToPlay={reFlipFirstLevel}
                                             duration={45}
                                             path={PATH.REFLIPTWO}
                                             description={'Найти пару два раза'}
                                             rotate={false}
                                             levelNumber={24}
                                             bestLevel={bestLevel}
                                             setBestLevel={setBestLevel}
                                             defaultPoints={160}
                                             isPatrickMode={false}
                                             isPattern={false}
                                             patternCards={[]}
                       />}/>

                <Route path={PATH.REFLIPTWO}
                       element={<MatchReFlip cardsToPlay={reFlipSecondLevel}
                                             duration={70}
                                             path={PATH.PATRICKFOUR}
                                             description={'Найти пару два раза'}
                                             rotate={false}
                                             levelNumber={25}
                                             bestLevel={bestLevel}
                                             setBestLevel={setBestLevel}
                                             defaultPoints={180}
                                             isPatrickMode={false}
                                             isPattern={false}
                                             patternCards={[]}
                       />}/>

                <Route path={PATH.PATRICKFOUR}
                       element={<Match cardsToPlay={fourthPatrickLevel}
                                       path={PATH.CARSBYMODELSTHREE}
                                       duration={130}
                                       rotate={false}
                                       description={'Патрик перемешивает поле, старший смены помогает найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={26}
                                       defaultPoints={290}
                                       isPatrickMode={true}
                                       isPattern={false}
                                       patternCards={[]}

                       />}/>

                <Route path={PATH.CARSBYMODELSTHREE}
                       element={<Match cardsToPlay={carsByModelsThirdLevel}
                                       path={PATH.REFLIPTHREE}
                                       duration={85}
                                       rotate={false}
                                       description={'Найти марку и модель автомобиля'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={27}
                                       defaultPoints={180}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}

                       />}/>

                <Route path={PATH.REFLIPTHREE}
                       element={<MatchReFlip cardsToPlay={reFlipThirdLevel}
                                             duration={115}
                                             path={PATH.REFLIPFOUR}
                                             description={'Найти пару два раза'}
                                             rotate={false}
                                             levelNumber={28}
                                             bestLevel={bestLevel}
                                             setBestLevel={setBestLevel}
                                             defaultPoints={260}
                                             isPatrickMode={false}
                                             isPattern={false}
                                             patternCards={[]}
                       />}/>

                <Route path={PATH.REFLIPFOUR}
                       element={<MatchReFlip cardsToPlay={reFlipFourthLevel}
                                             duration={150}
                                             path={PATH.POLMOFOUR}
                                             description={'Найти пару два раза'}
                                             rotate={false}
                                             levelNumber={29}
                                             bestLevel={bestLevel}
                                             setBestLevel={setBestLevel}
                                             defaultPoints={310}
                                             isPatrickMode={false}
                                             isPattern={false}
                                             patternCards={[]}
                       />}/>

                <Route path={PATH.POLMOFOUR}
                       element={<Match cardsToPlay={polmoFourhLevel}
                                       duration={160}
                                       path={PATH.HALFFOUR}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={30}
                                       defaultPoints={350}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>

                <Route path={PATH.HALFFOUR}
                       element={<Match cardsToPlay={halfFourthLevel}
                                       duration={135}
                                       path={PATH.ROTATEPATTERNONE}
                                       rotate={false}
                                       description={'Найти вторую половину'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={31}
                                       defaultPoints={320}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>

                <Route path={PATH.ROTATEPATTERNONE}
                       element={<Match cardsToPlay={classicPatternSecondLevel}
                                       duration={90}
                                       path={PATH.ROTATEPATTERNTWO}
                                       rotate={true}
                                       description={'Найти пару в определенном порядке'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={32}
                                       defaultPoints={220}
                                       isPatrickMode={false}
                                       isPattern={true}
                                       patternCards={classicPatternTwoCards}
                       />}/>

                <Route path={PATH.ROTATEPATTERNTWO}
                       element={<Match cardsToPlay={classicPatternThirdLevel}
                                       duration={145}
                                       path={PATH.PATRICKROTATEONE}
                                       rotate={true}
                                       description={'Найти пару в определенном порядке'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={33}
                                       defaultPoints={260}
                                       isPatrickMode={false}
                                       isPattern={true}
                                       patternCards={classicPatternThreeCards}
                       />}/>

                <Route path={PATH.PATRICKROTATEONE}
                       element={<Match cardsToPlay={thirdPatrickLevel}
                                       path={PATH.CARSBYMODELSFOUR}
                                       duration={150}
                                       rotate={true}
                                       description={'Патрик перемешивает поле, старший смены помогает найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={34}
                                       defaultPoints={300}
                                       isPatrickMode={true}
                                       isPattern={false}
                                       patternCards={[]}

                       />}/>

                <Route path={PATH.CARSBYMODELSFOUR}
                       element={<Match cardsToPlay={carsByModelsFourthLevel}
                                       duration={135}
                                       path={PATH.PATRICKROTATETWO}
                                       rotate={false}
                                       description={'Найти марку и модель автомобиля'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={35}
                                       defaultPoints={280}
                                       isPatrickMode={false}
                                       isPattern={false}
                                       patternCards={[]}
                       />}/>

                <Route path={PATH.PATRICKROTATETWO}
                       element={<Match cardsToPlay={fourthPatrickLevel}
                                       path={PATH.CIRCLE}
                                       duration={180}
                                       rotate={true}
                                       description={'Патрик перемешивает поле, старший смены помогает найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={36}
                                       defaultPoints={330}
                                       isPatrickMode={true}
                                       isPattern={false}
                                       patternCards={[]}

                       />}/>

                <Route path={PATH.CIRCLE}
                       element={<Circle cardsToPlay={circleLevel}
                                        duration={70}
                                        path={PATH.ROTATECIRCLE}
                                        rotate={false}
                                        description={'Найти пару'}
                                        bestLevel={bestLevel}
                                        setBestLevel={setBestLevel}
                                        levelNumber={37}
                                        defaultPoints={210}
                                        isPatrickMode={false}
                                        isPattern={false}
                                        patternCards={[]}
                       />}/>

                <Route path={PATH.ROTATECIRCLE}
                       element={<Circle cardsToPlay={circleLevel}
                                        duration={95}
                                        path={PATH.MATCH}
                                        rotate={true}
                                        description={'Найти пару'}
                                        bestLevel={bestLevel}
                                        setBestLevel={setBestLevel}
                                        levelNumber={38}
                                        defaultPoints={230}
                                        isPatrickMode={false}
                                        isPattern={false}
                                        patternCards={[]}
                       />}/>


                ///triple

                <Route path={PATH.TRIPLEMATCHONE}
                       element={<TripleMatch cardsToPlay={tripleFirstLevel}
                                             duration={50}
                                             path={PATH.CARSBYMODELSONE}

                                             rotate={false}
                                             description={'Масовка'}
                                             bestLevel={bestLevel}
                                             setBestLevel={setBestLevel}
                                             levelNumber={14}
                                             defaultPoints={160}
                                             isPatrickMode={false}
                                             isPattern={false}
                                             patternCards={[]}
                       />}/>



                <Route path={PATH.THREEMATCHESTWO}
                       element={<TripleMatch cardsToPlay={tripleSecondLevel}
                                             duration={90}
                                             path={PATH.THREEMATCHESTWO}
                                             rotate={false}
                                             description={'Масовка'}
                                             bestLevel={bestLevel}
                                             setBestLevel={setBestLevel}
                                             levelNumber={16}
                                             defaultPoints={180}
                                             isPatrickMode={false}
                                             isPattern={false}
                                             patternCards={[]}
                       />}/>



                <Route path={PATH.THREEMATCHESTWOROTATEONE}
                       element={<TripleMatch cardsToPlay={tripleFirstLevel}
                                             duration={40}
                                             path={PATH.THREEMATCHESTWOROTATETWO}
                                             rotate={true}
                                             description={'Пьяная масовка'}
                                             setBestLevel={setBestLevel}
                                             levelNumber={20}
                                             defaultPoints={200}
                                             isPatrickMode={false}
                                             bestLevel={bestLevel}
                                             isPattern={false}
                                             patternCards={[]}/>

                       }/>

                <Route path={PATH.THREEMATCHESTWOROTATETWO}
                       element={<TripleMatch cardsToPlay={tripleSecondLevel}
                                             duration={120}
                                             path={PATH.CRAZYONE}
                                             rotate={true}
                                             description={'Пьяная масовка'}
                                             bestLevel={bestLevel}
                                             setBestLevel={setBestLevel}
                                             levelNumber={21}
                                             defaultPoints={240}
                                             isPatrickMode={false}
                                             isPattern={false}
                                             patternCards={[]}
                       />}/>

                <Route path={PATH.CRAZYONE}
                       element={<TripleMatchCopy cardsToPlay={patternSecondLevelCards}
                                                 patternCards={patternSecondLevel}
                                                 isChangedSize={true}
                                                 duration={180}
                                                 path={PATH.MATCH}
                                                 rotate={true}
                                                 description={'Пьяная масовка по документу'}
                                                 bestLevel={bestLevel}
                                                 setBestLevel={setBestLevel}
                                                 levelNumber={22}
                                                 defaultPoints={260}
                                                 isPatrickMode={false}
                                                 isPattern={true}

                       />}/>




                <Route path={PATH.BATIS} element={<SmartListComponent/>}/>

            </Routes>

        </>
    );
};

export default AppRoutes22;