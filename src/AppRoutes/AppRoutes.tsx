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
    firstLevel,
    fourthLevel,
    halfFirstLevel, halfSecondLevel, patrickFirstLevel,
    patternFirstLevel,
    patternFirstLevelCards,
    patternSecondLevel,
    patternSecondLevelCards,
    polmoFirstLevel, polmoSecondLevel, polmoThirdLevel, reFlipFirstLevel, reFlipSecondLevel,
    secondLevel,
    thirdLevel,
    tripleFirstLevel,
    tripleSecondLevel
} from "../Match/Levels";
import {GameBoard} from "../Match/Gameboard";
import {TripleMatch} from "../TripleMatch/TripleMatch";
import {TripleMatchCopy} from "../TripleMatch/TripleMatchCopy";
import {Circle} from "../Match/Circle";
import {MatchReFlip} from "../Match/MatchReFlip";


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


    CRAZYONE: '/crazyOne',

    CIRCLE: '/circle',

    TRIPLETSET: '/tripletest'
}
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
                       />}/>
                <Route path={PATH.REFLIPONE}
                       element={<MatchReFlip cardsToPlay={reFlipFirstLevel}
                                             duration={40}
                                             path={PATH.POLMOTHREE}
                                             description={'Два документа'} rotate={false}
                                             levelNumber={9}
                                             bestLevel={bestLevel}
                                             setBestLevel={setBestLevel}
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
                       />}/>

                <Route path={PATH.REFLIPTWO}
                       element={<MatchReFlip cardsToPlay={reFlipSecondLevel}
                                             duration={90}
                                             path={PATH.CIRCLE}
                                             description={'Два документа'} rotate={false}
                                             levelNumber={12}
                                             bestLevel={bestLevel}
                                             setBestLevel={setBestLevel}
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

                       />}/>

                <Route path={PATH.THREEMATCHESTWOROTATEONE}
                       element={<TripleMatch cardsToPlay={tripleFirstLevel}
                                             duration={40}
                                             path={PATH.THREEMATCHESTWOROTATETWO}
                                             rotate={true}
                                             description={'Пьяная масовка'}
                                             setBestLevel={setBestLevel}
                                             levelNumber={20}
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
                       />}/>

            </Routes>

        </>
    );
};

export default AppRoutes;