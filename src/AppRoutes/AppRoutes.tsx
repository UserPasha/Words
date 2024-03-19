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
import {InitialStatePointsType} from "../Store/pointsReducer";
import {AppDispatch, RootState} from "../Store/store";
import {Modal} from "../Match/Modal";
import {useMatchHook} from "../hooks/useMatch";
import {Pack} from "../Pack/Pack";
import {Profile} from "../Profile/Profile";
import {Shop} from "../Match/Shop/Shop";
import {PackOpener} from "../Pack/PackOpener";
import {TokenCreator} from "../Match/Shop/TokenCreator";
import {addToken} from "../Store/bonusReducer";
import {Settings} from "../Settings/Settings";
import {NewGame} from "../Game/NewGame";
import {Categories} from "../Game/Categories";
import {StartMenu} from "../Game/StartMenu";
import {roundType} from "../Game/songs.data";


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
    // {
    //     path: PATH.THREEMATCHESTWO,
    //     component: TripleMatch,
    //     cardsToPlay: tripleSecondLevel,
    //     duration: 90,
    //     nextPath: PATH.PATTERNONE,
    //     rotate: false,
    //     description: 'Масовка',
    //     levelNumber: 16,
    //     defaultPoints: 180,
    // },
    // {
    //     path: PATH.PATTERNONE,
    //     component: TripleMatchCopy,
    //     cardsToPlay: patternFirstLevelCards,
    //     patternCards: patternFirstLevel,
    //     duration: 60,
    //     nextPath: PATH.PATTERNTWO,
    //     rotate: false,
    //     isChangedSize: true,
    //     description: 'Массовка по документу',
    //     levelNumber: 17,
    //     defaultPoints: 180,
    // },
    // {
    //     path: PATH.PATTERNTWO,
    //     component: TripleMatchCopy,
    //     cardsToPlay: patternSecondLevelCards,
    //     patternCards: patternSecondLevel,
    //     duration: 150,
    //     nextPath: PATH.CARSBYMODELSTWO,
    //     rotate: false,
    //     isChangedSize: true,
    //     description: 'Массовка по документу',
    //     levelNumber: 18,
    //     defaultPoints: 220,
    // },
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

const AppRoutes = () => {

    const gameRounds = useSelector<RootState, roundType[]>(state => state.songs)
    const allCategoriesNameAndPath = gameRounds.map(gr => gr.categories)
    const backArrowWays = gameRounds.map(gr => gr.path)
    const allSongs = gameRounds.map(gr => gr.categories.map(cat => cat.tracks))
    const allCategoriesNamesOfGame = gameRounds.map(gr => gr.categories.map(cat => cat.name))

    const allCategoriesNamesZeroRound = allCategoriesNamesOfGame[0]
    const allCategoriesNamesZeroRoundSummer = allCategoriesNamesZeroRound[0]
    const allCategoriesNamesZeroRoundWinter = allCategoriesNamesZeroRound[1]
    const allCategoriesNamesZeroRoundMenNames = allCategoriesNamesZeroRound[2]
    const allCategoriesNamesZeroRussianRock = allCategoriesNamesZeroRound[3]
    const allCategoriesNamesZeroMovies = allCategoriesNamesZeroRound[4]

    const allCategoriesNamesOneRound = allCategoriesNamesOfGame[1]
    const allCategoriesNamesOneRoundDigits = allCategoriesNamesOneRound[0]
    const allCategoriesNamesOneRoundDrinks = allCategoriesNamesOneRound[1]
    const allCategoriesNamesOneRoundWomenNames = allCategoriesNamesOneRound[2]
    const allCategoriesNamesOneRoundSerials = allCategoriesNamesOneRound[3]
    const allCategoriesNamesOneRoundAIRemixes = allCategoriesNamesOneRound[4]

    const allCategoriesNamesTwoRound = allCategoriesNamesOfGame[2]
    const allCategoriesNamesTwoRoundNinthysHits = allCategoriesNamesTwoRound[0]
    const allCategoriesNamesTwoRoundModern = allCategoriesNamesTwoRound[1]
    const allCategoriesNamesTwoRoundCars = allCategoriesNamesTwoRound[2]
    const allCategoriesNamesTwoRoundShows = allCategoriesNamesTwoRound[3]
    const allCategoriesNamesTwoRoundAIRemixes = allCategoriesNamesTwoRound[4]

    const allCategoriesNamesThreeRound = allCategoriesNamesOfGame[3]
    const allCategoriesNamesThreeRoundRetro = allCategoriesNamesThreeRound[0]
    const allCategoriesNamesThreeRoundFlowers = allCategoriesNamesThreeRound[1]
    const allCategoriesNamesThreeRoundRock = allCategoriesNamesThreeRound[2]
    const allCategoriesNamesThreeRoundMovies = allCategoriesNamesThreeRound[3]
    const allCategoriesNamesThreeRoundNames = allCategoriesNamesThreeRound[4]

    const allCategoriesNamesFourRound = allCategoriesNamesOfGame[4]
    const allCategoriesNamesFourRoundCities = allCategoriesNamesFourRound[0]
    const allCategoriesNamesFourRoundRusRock = allCategoriesNamesFourRound[1]
    const allCategoriesNamesFourRoundMensNames = allCategoriesNamesFourRound[2]
    const allCategoriesNamesFourRoundSerials = allCategoriesNamesFourRound[3]
    const allCategoriesNamesFourRoundAIRemixes = allCategoriesNamesFourRound[4]

    const allCategoriesNamesFiveRound = allCategoriesNamesOfGame[5]
    const allCategoriesNamesFiveRoundModern = allCategoriesNamesFiveRound[0]
    const allCategoriesNamesFiveRoundNinty = allCategoriesNamesFiveRound[1]
    const allCategoriesNamesFiveRoundNight = allCategoriesNamesFiveRound[2]
    const allCategoriesNamesFiveRoundMovies = allCategoriesNamesFiveRound[3]
    const allCategoriesNamesFiveRoundAIRemixes = allCategoriesNamesFiveRound[4]

//Songs
    const roundZeroSongs = allSongs[0]
    const roundOneSongs = allSongs[1]
    const roundTwoSongs = allSongs[2]
    const roundThreeSongs = allSongs[3]
    const roundFourSongs = allSongs[4]
    const roundFiveSongs = allSongs[5]

    const roundZeroSummerSongs = roundZeroSongs[0]
    const roundZeroWinterSongs = roundZeroSongs[1]
    const roundZeroMenNamesSongs = roundZeroSongs[2]
    const roundZeroRussianRockSongs = roundZeroSongs[3]
    const roundZeroMoviesSongs = roundZeroSongs[4]

    const roundOneDigitsSongs = roundOneSongs[0]
    const roundOneDrinksSongs = roundOneSongs[1]
    const roundOneWomenNamesSongs = roundOneSongs[2]
    const roundOneSerialsSongs = roundOneSongs[3]
    const roundOneAIRemixesSongs = roundOneSongs[4]

    const roundTwoNinthysHits = roundTwoSongs[0]
    const roundTwoModern = roundTwoSongs[1]
    const roundTwoCars = roundTwoSongs[2]
    const roundTwoShows = roundTwoSongs[3]
    const roundTwoAIRemixes = roundTwoSongs[4]

    const roundThreeRetro = roundThreeSongs[0]
    const roundThreeFlowers = roundThreeSongs[1]
    const roundThreeRock = roundThreeSongs[2]
    const roundThreeMovies = roundThreeSongs[3]
    const roundThreeNames = roundThreeSongs[4]

    const roundFourCities = roundFourSongs[0]
    const roundFourRusRock = roundFourSongs[1]
    const roundFourMensNames = roundFourSongs[2]
    const roundFourSerials = roundFourSongs[3]
    const roundFourAIRemixes = roundFourSongs[4]

    const roundFiveModern = roundFiveSongs[0]
    const roundFiveNinty = roundFiveSongs[1]
    const roundFiveNight = roundFiveSongs[2]
    const roundFiveMovies = roundFiveSongs[3]
    const roundFiveAIRemixes = roundFiveSongs[4]

// Rounds
    const categoryNameAndPathZero = allCategoriesNameAndPath[0]
    const categoryNameAndPathOne = allCategoriesNameAndPath[1]
    const categoryNameAndPathTwo = allCategoriesNameAndPath[2]
    const categoryNameAndPathThree = allCategoriesNameAndPath[3]
    const categoryNameAndPathFour = allCategoriesNameAndPath[4]
    const categoryNameAndPathFive = allCategoriesNameAndPath[5]

    const backArrowWaysZero = backArrowWays[0]
    const backArrowWaysOne = backArrowWays[1]
    const backArrowWaysTwo = backArrowWays[2]
    const backArrowWaysThree = backArrowWays[3]
    const backArrowWaysFour = backArrowWays[4]
    const backArrowWaysFive = backArrowWays[5]


    //console.log(allCategoriesNamesOfGame)

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
                {/*<Route path={PATH.MODAL} element={<Modal/>}/>*/}

                {/*{levels.map((level, index) => (*/}
                {/*<Route*/}
                {/*    key={index}*/}
                {/*    path={level.path}*/}
                {/*    element={*/}
                {/*        <level.component*/}
                {/*            cardsToPlay={level.cardsToPlay}*/}
                {/*            duration={level.duration}*/}
                {/*            path={level.nextPath}*/}
                {/*            rotate={level.rotate}*/}
                {/*            description={level.description}*/}
                {/*            bestLevel={bestLevel}*/}
                {/*            setBestLevel={setBestLevel}*/}
                {/*            levelNumber={level.levelNumber}*/}
                {/*            defaultPoints={level.defaultPoints}*/}
                {/*            isChangedSize={level.isChangedSize}*/}
                {/*            patternCards={level.patternCards}*/}
                {/*        />*/}
                {/*    }*/}
                {/*/>*/}
                {/*))};*/}

                <Route path={PATH.MATCH} element={<GameBoard bestLevel={bestLevel}/>}/>


                //patrick

                {/*<Route path={PATH.PATRICKFIRST}*/}
                {/*       element={<Match cardsToPlay={firstPatrickLevel}*/}
                {/*                       path={PATH.PATRICKSECOND}*/}
                {/*                       duration={150}*/}
                {/*                       rotate={false}*/}
                {/*                       description={'Найти пару'}*/}
                {/*                       bestLevel={bestLevel}*/}
                {/*                       setBestLevel={setBestLevel}*/}
                {/*                       levelNumber={0}*/}
                {/*                       defaultPoints={100}*/}
                {/*                       isPatrickMode={true}*/}
                {/*                       isPattern={false}*/}
                {/*                       patternCards={[]}*/}

                {/*       />}/>*/}

                //patrick + pattern + rotate

                {/*<Route path={PATH.PATRPATTROT}*/}
                {/*       element={<Match cardsToPlay={patternPatrickRotateTest}*/}
                {/*                       path={PATH.PATRICKSECOND}*/}
                {/*                       duration={150}*/}
                {/*                       rotate={true}*/}
                {/*                       description={'Найти пару'}*/}
                {/*                       bestLevel={bestLevel}*/}
                {/*                       setBestLevel={setBestLevel}*/}
                {/*                       levelNumber={0}*/}
                {/*                       defaultPoints={100}*/}
                {/*                       isPatrickMode={true}*/}
                {/*                       isPattern={true}*/}
                {/*                       patternCards={classicPatternOneCards}*/}

                {/*       />}/>*/}


                //pattern

                {/*<Route path={PATH.TESTPATTERN}*/}
                {/*       element={<Match cardsToPlay={firstLevel}*/}
                {/*                       path={PATH.TWO}*/}
                {/*                       duration={41}*/}
                {/*                       rotate={false}*/}
                {/*                       description={'Найти пару'}*/}
                {/*                       bestLevel={bestLevel}*/}
                {/*                       setBestLevel={setBestLevel}*/}
                {/*                       levelNumber={0}*/}
                {/*                       defaultPoints={100}*/}
                {/*                       isPatrickMode={false}*/}
                {/*                       isPattern={true}*/}
                {/*                       patternCards={testPatternFirstLevel}*/}

                {/*       />}/>*/}

                //standart

                {/*<Route path={PATH.ONE}*/}
                {/*       element={<Match cardsToPlay={firstLevel}*/}
                {/*                       path={PATH.TWO}*/}
                {/*                       duration={30}*/}
                {/*                       rotate={false}*/}
                {/*                       description={'Найти пару'}*/}
                {/*                       bestLevel={bestLevel}*/}
                {/*                       setBestLevel={setBestLevel}*/}
                {/*                       levelNumber={0}*/}
                {/*                       defaultPoints={100}*/}
                {/*                       isPatrickMode={false}*/}
                {/*                       isPattern={false}*/}
                {/*                       patternCards={[]}*/}

                {/*       />}/>*/}

                //rotate

                {/*<Route path={PATH.ONE}*/}
                {/*       element={<Match cardsToPlay={firstLevel}*/}
                {/*                       path={PATH.TWO}*/}
                {/*                       duration={30}*/}
                {/*                       rotate={true}*/}
                {/*                       description={'Найти пару'}*/}
                {/*                       bestLevel={bestLevel}*/}
                {/*                       setBestLevel={setBestLevel}*/}
                {/*                       levelNumber={0}*/}
                {/*                       defaultPoints={100}*/}
                {/*                       isPatrickMode={false}*/}
                {/*                       isPattern={false}*/}
                {/*                       patternCards={[]}*/}

                {/*       />}/>*/}

                // two times

                {/*<Route path={PATH.REFLIPONE}*/}
                {/*       element={<MatchReFlip cardsToPlay={reFlipFirstLevel}*/}
                {/*                             duration={40}*/}
                {/*                             path={PATH.POLMOTHREE}*/}
                {/*                             description={'Два документа'} rotate={false}*/}
                {/*                             levelNumber={9}*/}
                {/*                             bestLevel={bestLevel}*/}
                {/*                             setBestLevel={setBestLevel}*/}
                {/*                             defaultPoints={160}*/}
                {/*                             isPatrickMode={false}*/}
                {/*                             isPattern={false}*/}
                {/*                             patternCards={[]}*/}
                {/*       />}/>*/}

                {/*<Route path={PATH.PATRICKSECOND}*/}
                {/*       element={<Match cardsToPlay={secondPatrickLevel}*/}
                {/*                       path={PATH.TWO}*/}
                {/*                       duration={180}*/}
                {/*                       rotate={false}*/}
                {/*                       description={'Найти пару'}*/}
                {/*                       bestLevel={bestLevel}*/}
                {/*                       setBestLevel={setBestLevel}*/}
                {/*                       levelNumber={0}*/}
                {/*                       defaultPoints={100}*/}
                {/*                       isPatrickMode={true}*/}
                {/*                       isPattern={false}*/}
                {/*                       patternCards={[]}*/}
                {/*       />}/>*/}


                ///start classic


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

                {/*<Route path={PATH.CARSBYMODELSONE}*/}
                {/*       element={<Match cardsToPlay={carsByModelsFirstLevel}*/}
                {/*                       duration={30}*/}
                {/*                       path={PATH.THREEMATCHESTWO}*/}
                {/*                       rotate={false}*/}
                {/*                       description={'Найти пару'}*/}
                {/*                       bestLevel={bestLevel}*/}
                {/*                       setBestLevel={setBestLevel}*/}
                {/*                       levelNumber={15}*/}
                {/*                       defaultPoints={200}*/}
                {/*                       isPatrickMode={false}*/}
                {/*                       isPattern={false}*/}
                {/*                       patternCards={[]}*/}

                {/*       />}/>*/}

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

                {/*<Route path={PATH.PATTERNONE}*/}
                {/*       element={<TripleMatchCopy cardsToPlay={patternFirstLevelCards}*/}
                {/*                                 patternCards={patternFirstLevel}*/}
                {/*                                 duration={60}*/}
                {/*                                 path={PATH.PATTERNTWO}*/}
                {/*                                 rotate={false}*/}
                {/*                                 description={'Массовка по документу'}*/}
                {/*                                 bestLevel={bestLevel}*/}
                {/*                                 isChangedSize={true}*/}
                {/*                                 setBestLevel={setBestLevel}*/}
                {/*                                 levelNumber={17}*/}
                {/*                                 defaultPoints={180}*/}
                {/*                                 isPatrickMode={false}*/}
                {/*                                 isPattern={true}*/}
                {/*       />}/>*/}

                {/*<Route path={PATH.PATTERNTWO}*/}
                {/*       element={<TripleMatchCopy cardsToPlay={patternSecondLevelCards}*/}
                {/*                                 patternCards={patternSecondLevel}*/}

                {/*                                 duration={150}*/}
                {/*                                 path={PATH.CARSBYMODELSTWO}*/}
                {/*                                 rotate={false}*/}
                {/*                                 isPattern={true}*/}
                {/*                                 description={'Массовка по документу'}*/}
                {/*                                 bestLevel={bestLevel}*/}
                {/*                                 isChangedSize={true}*/}
                {/*                                 setBestLevel={setBestLevel}*/}
                {/*                                 levelNumber={18}*/}
                {/*                                 defaultPoints={220}*/}
                {/*                                 isPatrickMode={false}*/}
                {/*       />}/>*/}

                {/*<Route path={PATH.CARSBYMODELSTWO}*/}
                {/*       element={<Match cardsToPlay={carsByModelsSecondLevel}*/}
                {/*                       duration={45}*/}
                {/*                       path={PATH.THREEMATCHESTWOROTATEONE}*/}
                {/*                       rotate={false}*/}
                {/*                       description={'Найти пару'}*/}
                {/*                       bestLevel={bestLevel}*/}
                {/*                       setBestLevel={setBestLevel}*/}
                {/*                       levelNumber={19}*/}
                {/*                       defaultPoints={200}*/}
                {/*                       isPatrickMode={false}*/}
                {/*                       isPattern={false}*/}
                {/*                       patternCards={[]}*/}

                {/*       />}/>*/}

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
                {/*<Route path={PATH.NEWGAMEZERO} element={<NewGame arraySongs={roundOneSummerCategorySongs}*/}
                {/*                                             categoryTitle={'Лето'}*/}
                {/*                                             backWay={backArrowWaysZero}*/}
                {/*/>}/>*/}
                {/*<Route path={PATH.CATEGORIES} element={<Categories CategoryNameAndPath={categoryNameAndPathOne}*/}
                {/*                                                   roundNumber={0}/>}/>*/}
                {/*<Route path={PATH.CATEGORIEONE} element={<Categories CategoryNameAndPath={CategoryNameAndPath}*/}
                {/*                                                   roundNumber={1}/>}/>*/}

                {}
                {/*<Route path={PATH.CATEGORIES2} element={<Categories CategoryNameAndPath={CategoryNameAndPath2}*/}
                {/*                                                   roundNumber={1}/>}/>*/}
                {/*<Route path={PATH.CATEGORIES3} element={<Categories CategoryNameAndPath={CategoryNameAndPath3}*/}
                {/*                                                   roundNumber={2}/>}/>*/}
                {/*<Route path={PATH.CATEGORIES4} element={<Categories CategoryNameAndPath={CategoryNameAndPath4}*/}
                {/*                                                   roundNumber={3}/>}/>*/}
                {/*<Route path={PATH.CATEGORIES5} element={<Categories CategoryNameAndPath={CategoryNameAndPath5}*/}
                {/*                                                   roundNumber={4}/>}/>*/}
                <Route path={PATH.STARTMENU} element={<StartMenu/>}/>
                <Route path={PATH.ROUNDZERO} element={<Categories CategoryNameAndPath={categoryNameAndPathZero}
                                                                 roundNumber={0}

                />}/>
                <Route path={PATH.ROUNDONE} element={<Categories CategoryNameAndPath={categoryNameAndPathOne}
                                                                 roundNumber={1}

                />}/>
                <Route path={PATH.ROUNDTWO} element={<Categories CategoryNameAndPath={categoryNameAndPathTwo}
                                                                   roundNumber={2}

                />}/>
                <Route path={PATH.ROUNDTHREE} element={<Categories CategoryNameAndPath={categoryNameAndPathThree}
                                                                 roundNumber={3}

                />}/>
                <Route path={PATH.ROUNDFOUR} element={<Categories CategoryNameAndPath={categoryNameAndPathFour}
                                                                   roundNumber={4}

                />}/>

                <Route path={PATH.ROUNDFIVE} element={<Categories CategoryNameAndPath={categoryNameAndPathFive}
                                                                  roundNumber={5}

                />}/>


                <Route path={PATH.SUMMERCATEGORY} element={<NewGame arraySongs={roundZeroSummerSongs}
                                                                    categoryTitle={allCategoriesNamesZeroRoundSummer}
                                                                    backWay={backArrowWaysZero}
                                                                    roundNumber={0}/>}/>
                <Route path={PATH.WINTERCATEGORY} element={<NewGame arraySongs={roundZeroWinterSongs}
                                                                    categoryTitle={allCategoriesNamesZeroRoundWinter}
                                                                    backWay={backArrowWaysZero}
                                                                    roundNumber={0}/>}/>
                <Route path={PATH.MENNAMESCATEGORY} element={<NewGame arraySongs={roundZeroMenNamesSongs}
                                                                      categoryTitle={allCategoriesNamesZeroRoundMenNames}
                                                                      backWay={backArrowWaysZero}
                                                                      roundNumber={0}/>}/>
                <Route path={PATH.RUSSIANROCK} element={<NewGame arraySongs={roundZeroRussianRockSongs}
                                                                 categoryTitle={allCategoriesNamesZeroRussianRock}
                                                                 backWay={backArrowWaysZero}
                                                                 roundNumber={0}/>}/>
                <Route path={PATH.ZEROMOVIES} element={<NewGame arraySongs={roundZeroMoviesSongs}
                                                                categoryTitle={allCategoriesNamesZeroMovies}
                                                                backWay={backArrowWaysZero}
                                                                roundNumber={0}/>}/>
                <Route path={PATH.DIGITSCATEGORY} element={<NewGame arraySongs={roundOneDigitsSongs}
                                                                    categoryTitle={allCategoriesNamesOneRoundDigits}
                                                                    backWay={backArrowWaysOne}
                                                                    roundNumber={1}/>}/>
                <Route path={PATH.DRINKSCATEGORY} element={<NewGame arraySongs={roundOneDrinksSongs}
                                                                    categoryTitle={allCategoriesNamesOneRoundDrinks}
                                                                    backWay={backArrowWaysOne}
                                                                    roundNumber={1}/>}/>
                <Route path={PATH.WOMENNAMES} element={<NewGame arraySongs={roundOneWomenNamesSongs}
                                                                categoryTitle={allCategoriesNamesOneRoundWomenNames}
                                                                backWay={backArrowWaysOne}
                                                                roundNumber={1}/>}/>
                <Route path={PATH.SERIALSCATEGORY} element={<NewGame arraySongs={roundOneSerialsSongs}
                                                                     categoryTitle={allCategoriesNamesOneRoundSerials}
                                                                     backWay={backArrowWaysOne}
                                                                     roundNumber={1}/>}/>
                <Route path={PATH.AIREMIXESONE} element={<NewGame arraySongs={roundOneAIRemixesSongs}
                                                                  categoryTitle={allCategoriesNamesOneRoundAIRemixes}
                                                                  backWay={backArrowWaysOne}
                                                                  roundNumber={1}/>}/>
                <Route path={PATH.NINTYSHITS} element={<NewGame arraySongs={roundTwoNinthysHits}
                                                                  categoryTitle={allCategoriesNamesTwoRoundNinthysHits}
                                                                  backWay={backArrowWaysTwo}
                                                                  roundNumber={2}/>}/>
                <Route path={PATH.MODERNCATHEGOTY} element={<NewGame arraySongs={roundTwoModern}
                                                                categoryTitle={allCategoriesNamesTwoRoundModern}
                                                                backWay={backArrowWaysTwo}
                                                                roundNumber={2}/>}/>
                <Route path={PATH.CARSCATEGORY} element={<NewGame arraySongs={roundTwoCars}
                                                                     categoryTitle={allCategoriesNamesTwoRoundCars}
                                                                     backWay={backArrowWaysTwo}
                                                                     roundNumber={2}/>}/>
                <Route path={PATH.SHOWSCATEGORY} element={<NewGame arraySongs={roundTwoShows}
                                                                  categoryTitle={allCategoriesNamesTwoRoundShows}
                                                                  backWay={backArrowWaysTwo}
                                                                  roundNumber={2}/>}/>
                <Route path={PATH.AIREMIXESTWO} element={<NewGame arraySongs={roundTwoAIRemixes}
                                                                   categoryTitle={allCategoriesNamesTwoRoundAIRemixes}
                                                                   backWay={backArrowWaysTwo}
                                                                   roundNumber={2}/>}/>

                <Route path={PATH.FOREIGNRETRO} element={<NewGame arraySongs={roundThreeRetro}
                                                                  categoryTitle={allCategoriesNamesThreeRoundRetro}
                                                                  backWay={backArrowWaysThree}
                                                                  roundNumber={3}/>}/>
                <Route path={PATH.FLOWERS} element={<NewGame arraySongs={roundThreeFlowers}
                                                                  categoryTitle={allCategoriesNamesThreeRoundFlowers}
                                                                  backWay={backArrowWaysThree}
                                                                  roundNumber={3}/>}/>
                <Route path={PATH.FOREIGNROCK} element={<NewGame arraySongs={roundThreeRock}
                                                             categoryTitle={allCategoriesNamesThreeRoundRock}
                                                             backWay={backArrowWaysThree}
                                                             roundNumber={3}/>}/>
                <Route path={PATH.MOVIESTWO} element={<NewGame arraySongs={roundThreeMovies}
                                                                 categoryTitle={allCategoriesNamesThreeRoundMovies}
                                                                 backWay={backArrowWaysThree}
                                                                 roundNumber={3}/>}/>
                <Route path={PATH.WOMENNAMESTWO} element={<NewGame arraySongs={roundThreeNames}
                                                               categoryTitle={allCategoriesNamesThreeRoundNames}
                                                               backWay={backArrowWaysThree}
                                                               roundNumber={3}/>}/>

                <Route path={PATH.CITIES} element={<NewGame arraySongs={roundFourCities}
                                                                   categoryTitle={allCategoriesNamesFourRoundCities}
                                                                   backWay={backArrowWaysFour}
                                                                   roundNumber={4}/>}/>
                <Route path={PATH.RUSROCKTWO} element={<NewGame arraySongs={roundFourRusRock}
                                                            categoryTitle={allCategoriesNamesFourRoundRusRock}
                                                            backWay={backArrowWaysFour}
                                                            roundNumber={4}/>}/>
                <Route path={PATH.MENSNAMESTWO} element={<NewGame arraySongs={roundFourMensNames}
                                                                categoryTitle={allCategoriesNamesFourRoundMensNames}
                                                                backWay={backArrowWaysFour}
                                                                roundNumber={4}/>}/>
                <Route path={PATH.SERIALSTWO} element={<NewGame arraySongs={roundFourSerials}
                                                                  categoryTitle={allCategoriesNamesFourRoundSerials}
                                                                  backWay={backArrowWaysFour}
                                                                  roundNumber={4}/>}/>
                <Route path={PATH.AIREMIXESTHREE} element={<NewGame arraySongs={roundFourAIRemixes}
                                                                categoryTitle={allCategoriesNamesFourRoundAIRemixes}
                                                                backWay={backArrowWaysFour}
                                                                roundNumber={4}/>}/>

                <Route path={PATH.MODERNTWO} element={<NewGame arraySongs={roundFiveModern}
                                                                    categoryTitle={allCategoriesNamesFiveRoundModern}
                                                                    backWay={backArrowWaysFive}
                                                                    roundNumber={5}/>}/>
                <Route path={PATH.NINTYTWO} element={<NewGame arraySongs={roundFiveNinty}
                                                               categoryTitle={allCategoriesNamesFiveRoundNinty}
                                                               backWay={backArrowWaysFive}
                                                               roundNumber={5}/>}/>
                <Route path={PATH.NIGHTCATEGORY} element={<NewGame arraySongs={roundFiveNight}
                                                              categoryTitle={allCategoriesNamesFiveRoundNight}
                                                              backWay={backArrowWaysFive}
                                                              roundNumber={5}/>}/>
                <Route path={PATH.MOVIESTHREE} element={<NewGame arraySongs={roundFiveMovies}
                                                                   categoryTitle={allCategoriesNamesFiveRoundMovies}
                                                                   backWay={backArrowWaysFive}
                                                                   roundNumber={5}/>}/>
                <Route path={PATH.AIREMIXESFOUR} element={<NewGame arraySongs={roundFiveAIRemixes}
                                                                 categoryTitle={allCategoriesNamesFiveRoundAIRemixes}
                                                                 backWay={backArrowWaysFive}
                                                                 roundNumber={5}/>}/>

            </Routes>

        </>
    );
};

export default AppRoutes;