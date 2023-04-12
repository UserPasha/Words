import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Cards} from "../Cards/Cards";
import {CurrentCard} from "../CurrentCard/CurrentCard";
import {Home} from "../Home/Home";
import {Search} from "../Search/Search";
import {TestComponent} from "../TestComponent/TestComponent";
import {Game} from "../Game/Game";
import {Match} from "../Match/Match";
import {firstLevel, secondLevel} from "../Match/Levels";

export const PATH = {
    HOME: '/',
    CARDS: '/cards',
    WORD: '/word',
    SEARCH: '/search',
    TEST: '/secret',
    GAME: '/game',
    MATCH: '/match'
}
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.CARDS} element={<Cards/>}/>
                <Route path={PATH.WORD} element={<CurrentCard/>}/>
                <Route path={PATH.SEARCH} element={<Search/>}/>
                <Route path={PATH.TEST} element={<TestComponent/>}/>
                <Route path={PATH.GAME} element={<Game/>}/>
                <Route path={PATH.MATCH} element={<Match cardsToPlay={secondLevel}/>}/>
            </Routes>
            
        </>
    );
};

export default AppRoutes;