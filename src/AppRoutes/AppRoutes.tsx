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
    carsByModelsFirstLevel, carsByModelsSecondLevel,
    circleLevel,
    fifthLevel,
    filtronMix,
    firstLevel, firstPatrickLevel,
    fourthLevel,
    halfFirstLevel, halfSecondLevel,
    patternFirstLevel,
    patternFirstLevelCards,
    patternSecondLevel,
    patternSecondLevelCards,
    polmoFirstLevel, polmoSecondLevel, polmoThirdLevel, reFlipFirstLevel, reFlipSecondLevel,
    secondLevel, secondPatrickLevel,
    thirdLevel,
    tripleFirstLevel,
    tripleSecondLevel
} from "../Match/Levels";
import {GameBoard} from "../Match/Gameboard";
import {TripleMatch} from "../TripleMatch/TripleMatch";
import {TripleMatchCopy} from "../TripleMatch/TripleMatchCopy";
import {Circle} from "../Match/Circle";
import {MatchReFlip} from "../Match/MatchReFlip";
import {useSelector} from "react-redux";
import {InitialStatePointsType} from "../Store/pointsReducer";
import {RootState} from "../Store/store";
import {Modal} from "../Match/Modal";
import {useMatchHook} from "../hooks/useMatch";
import {Pack} from "../Pack/Pack";
import {Profile} from "../Profile/Profile";
import {Shop} from "../Match/Shop/Shop";


export const PATH = {
    HOME: '/',
    CARDS: '/cards',
    WORD: '/word',
    SEARCH: '/search',
    TEST: '/secret',
    GAME: '/game',
    MATCH: '/match',
    FILTRON: '/filtron',
    ONE: '/one',
    TWO: '/two',
    THREE: '/three',
    FOUR: '/four',
    FIVE: '/five',
    HALFONE: '/halfOne',
    HALFTWO: '/halfTwo',
    TRIPLEMATCHONE: '/tripleMatchOne',
    THREEMATCHESTWO: '/threeMatchesTwo',
    THREEMATCHESTWOROTATEONE: '/threeMatchesTwoRotateOne',
    THREEMATCHESTWOROTATETWO: '/threeMatchesTwoRotateTwo',
    POLMOONE: '/polmoOne',
    POLMOTWO: '/polmoTwo',
    POLMOTHREE: '/polmoThree',
    PATTERNONE: '/patternOne',
    PATTERNTWO: '/patternTwo',
    REFLIPONE: '/reflipOne',
    REFLIPTWO: '/reflipTwo',

    CARSBYMODELSONE: '/carsByModelsOne',
    CARSBYMODELSTWO: '/carsByModelsTwo',
    PATRICKFIRST: '/patrickFirst',
    PATRICKSECOND: '/patrickSecond',


    CRAZYONE: '/crazyOne',

    CIRCLE: '/circle',
    MODAL: '/modal',
    TRIPLETSET: '/tripletest',
    PROFILE: '/profile',
    // PACK: '/pack',
    SHOP: '/shop'
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
        path: PATH.THREEMATCHESTWO,
        component: TripleMatch,
        cardsToPlay: tripleSecondLevel,
        duration: 90,
        nextPath: PATH.PATTERNONE,
        rotate: false,
        description: 'Масовка',
        levelNumber: 16,
        defaultPoints: 180,
    },
    {
        path: PATH.PATTERNONE,
        component: TripleMatchCopy,
        cardsToPlay: patternFirstLevelCards,
        patternCards: patternFirstLevel,
        duration: 60,
        nextPath: PATH.PATTERNTWO,
        rotate: false,
        isChangedSize: true,
        description: 'Массовка по документу',
        levelNumber: 17,
        defaultPoints: 180,
    },
    {
        path: PATH.PATTERNTWO,
        component: TripleMatchCopy,
        cardsToPlay: patternSecondLevelCards,
        patternCards: patternSecondLevel,
        duration: 150,
        nextPath: PATH.CARSBYMODELSTWO,
        rotate: false,
        isChangedSize: true,
        description: 'Массовка по документу',
        levelNumber: 18,
        defaultPoints: 220,
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

const AppRoutes = () => {

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
                {/*<Route path={PATH.PACK} element={<Pack/>}/>*/}
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.SHOP} element={<Shop/>}/>
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

                <Route path={PATH.PATRICKFIRST}
                       element={<Match cardsToPlay={firstPatrickLevel}
                                       path={PATH.PATRICKSECOND}
                                       duration={150}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={0}
                                       defaultPoints={100}
                                       isPatrickMode={true}

                       />}/>

                <Route path={PATH.PATRICKSECOND}
                       element={<Match cardsToPlay={secondPatrickLevel}
                                       path={PATH.TWO}
                                       duration={180}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={0}
                                       defaultPoints={100}
                                       isPatrickMode={true}
                       />}/>


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
                           defaultPoints={120}
                            isPatrickMode={false}

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
                       />}/>

                <Route path={PATH.THREE}
                       element={<Match
                           cardsToPlay={thirdLevel}
                           path={PATH.FOUR}
                           duration={50}
                           rotate={false}
                           description={'Найти пару'}
                           bestLevel={bestLevel}
                           setBestLevel={setBestLevel}
                           levelNumber={4}
                           defaultPoints={150}
                            isPatrickMode={false}

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
                                       defaultPoints={180}
                                        isPatrickMode={false}
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
                       />}/>


                <Route path={PATH.HALFONE}
                       element={<Match cardsToPlay={halfFirstLevel}
                                       duration={30}
                                       path={PATH.FIVE}
                                       rotate={false}
                                       description={'Найти вторую половину'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={7}
                                       defaultPoints={200}
                                        isPatrickMode={false}
                       />}/>


                <Route path={PATH.FIVE}
                       element={<Match cardsToPlay={fifthLevel}
                                       path={PATH.REFLIPONE}
                                       duration={70}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={8}
                                       defaultPoints={200}
                                        isPatrickMode={false}
                       />}/>
                <Route path={PATH.REFLIPONE}
                       element={<MatchReFlip cardsToPlay={reFlipFirstLevel}
                                             duration={40}
                                             path={PATH.POLMOTHREE}
                                             description={'Два документа'} rotate={false}
                                             levelNumber={9}
                                             bestLevel={bestLevel}
                                             setBestLevel={setBestLevel}
                                             defaultPoints={160}
                                              isPatrickMode={false}
                       />}/>
                <Route path={PATH.POLMOTHREE}
                       element={<Match cardsToPlay={polmoThirdLevel}
                                       duration={100}
                                       path={PATH.HALFTWO}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={10}
                                       defaultPoints={300}
                                        isPatrickMode={false}
                       />}/>
                <Route path={PATH.HALFTWO}
                       element={<Match cardsToPlay={halfSecondLevel}
                                       duration={70}
                                       path={PATH.REFLIPTWO}
                                       rotate={false}
                                       description={'Найти вторую половину'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={11}
                                       defaultPoints={200}
                                        isPatrickMode={false}
                       />}/>

                <Route path={PATH.REFLIPTWO}
                       element={<MatchReFlip cardsToPlay={reFlipSecondLevel}
                                             duration={90}
                                             path={PATH.CIRCLE}
                                             description={'Два документа'} rotate={false}
                                             levelNumber={12}
                                             bestLevel={bestLevel}
                                             setBestLevel={setBestLevel}
                                             defaultPoints={200}
                                              isPatrickMode={false}
                       />}/>

                <Route path={PATH.CIRCLE}
                       element={<Circle cardsToPlay={circleLevel}
                                        duration={110}
                                        path={PATH.TRIPLEMATCHONE}
                                        rotate={false}
                                        description={'Крутящий момент'}
                                        bestLevel={bestLevel}
                                        setBestLevel={setBestLevel}
                                        levelNumber={13}
                                        defaultPoints={200}
                                         isPatrickMode={false}
                       />}/>

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
                       />}/>

                <Route path={PATH.CARSBYMODELSONE}
                       element={<Match cardsToPlay={carsByModelsFirstLevel}
                                       duration={30}
                                       path={PATH.THREEMATCHESTWO}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={15}
                                       defaultPoints={200}
                                        isPatrickMode={false}

                       />}/>

                <Route path={PATH.THREEMATCHESTWO}
                       element={<TripleMatch cardsToPlay={tripleSecondLevel}
                                             duration={90}
                                             path={PATH.PATTERNONE}
                                             rotate={false}
                                             description={'Масовка'}
                                             bestLevel={bestLevel}
                                             setBestLevel={setBestLevel}
                                             levelNumber={16}
                                             defaultPoints={180}
                                              isPatrickMode={false}
                       />}/>

                <Route path={PATH.PATTERNONE}
                       element={<TripleMatchCopy cardsToPlay={patternFirstLevelCards}
                                                 patternCards={patternFirstLevel}
                                                 duration={60}
                                                 path={PATH.PATTERNTWO}
                                                 rotate={false}
                                                 description={'Массовка по документу'}
                                                 bestLevel={bestLevel}
                                                 isChangedSize={true}
                                                 setBestLevel={setBestLevel}
                                                 levelNumber={17}
                                                 defaultPoints={180}
                                                  isPatrickMode={false}
                       />}/>

                <Route path={PATH.PATTERNTWO}
                       element={<TripleMatchCopy cardsToPlay={patternSecondLevelCards}
                                                 patternCards={patternSecondLevel}

                                                 duration={150}
                                                 path={PATH.CARSBYMODELSTWO}
                                                 rotate={false}

                                                 description={'Массовка по документу'}
                                                 bestLevel={bestLevel}
                                                 isChangedSize={true}
                                                 setBestLevel={setBestLevel}
                                                 levelNumber={18}
                                                 defaultPoints={220}
                                                  isPatrickMode={false}
                       />}/>

                <Route path={PATH.CARSBYMODELSTWO}
                       element={<Match cardsToPlay={carsByModelsSecondLevel}
                                       duration={45}
                                       path={PATH.THREEMATCHESTWOROTATEONE}
                                       rotate={false}
                                       description={'Найти пару'}
                                       bestLevel={bestLevel}
                                       setBestLevel={setBestLevel}
                                       levelNumber={19}
                                       defaultPoints={200}
                                        isPatrickMode={false}

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
                                             bestLevel={bestLevel}/>

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
                       />}/>

            </Routes>

        </>
    );
};

export default AppRoutes;