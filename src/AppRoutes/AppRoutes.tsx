import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../Home/Home";
import { Cards } from "../Cards/Cards";
import { CurrentCard } from "../CurrentCard/CurrentCard";
import { Search } from "../Search/Search";
import { TestComponent } from "../TestComponent/TestComponent";
import { Game } from "../Game/Game";

import { PackOpener } from "../Pack/PackOpener";
import { Profile } from "../Profile/Profile";
import { Shop } from "../Match/Shop/Shop";
import { Settings } from "../Settings/Settings";

import { StartMenu } from "../Game/StartMenu";
import { Categories } from "../Game/Categories";
import { NewGame } from "../Game/NewGame";

import { dataSongs } from "../Game/songs.data";
import {SmartListComponent} from "../Home/Batis"; // твой источник раундов/категорий


const AppRoutes = () => {


    // Роуты, которые не зависят от раундов
    const staticRoutes = (
        <>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/word" element={<CurrentCard />} />
            <Route path="/search" element={<Search />} />
            <Route path="/secret" element={<TestComponent />} />
            <Route path="/game" element={<Game />} />
            <Route path="/packOpener" element={<PackOpener />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/gameSettings" element={<Settings />} />
            <Route path="/startmenu" element={<StartMenu />} />
            <Route path="/batis" element={<SmartListComponent />} />
        </>
    );


    // --- ДИНАМИЧЕСКИЕ РОУТЫ ДЛЯ РАУНДОВ ---
    const roundRoutes = dataSongs.map(round => (
        <React.Fragment key={round.round}>

            {/* --- СТАРЫЙ ПУТЬ ДЛЯ ОБРАТНОЙ СОВМЕСТИМОСТИ --- */}
            <Route
                path={round.path}
                element={
                    <Categories
                        CategoryNameAndPath={round.categories}
                        roundNumber={round.round}
                    />
                }
            />

            {/* --- НОВЫЙ ДИНАМИЧЕСКИЙ ПУТЬ --- */}
            <Route
                path={`/round/${round.round}`}
                element={
                    <Categories
                        CategoryNameAndPath={round.categories}
                        roundNumber={round.round}
                    />
                }
            />

        </React.Fragment>
    ));


    // --- ДИНАМИЧЕСКИЕ РОУТЫ ДЛЯ КАТЕГОРИЙ ---
    const categoryRoutes = dataSongs.flatMap(round =>
        round.categories.map((category, index) => (
            <React.Fragment key={round.round + "_" + index}>

                {/* --- СТАРЫЙ ПУТЬ --- */}
                <Route
                    path={category.path}
                    element={
                        <NewGame
                            arraySongs={category.tracks}
                            categoryTitle={category.name}
                            backWay={round.path}
                            roundNumber={round.round}
                        />
                    }
                />

                {/* --- НОВЫЙ ПУТЬ --- */}
                <Route
                    path={`/round/${round.round}/category/${index}`}
                    element={
                        <NewGame
                            arraySongs={category.tracks}
                            categoryTitle={category.name}
                            backWay={round.path}
                            roundNumber={round.round}
                        />
                    }
                />

            </React.Fragment>
        ))
    );


    return (
        <Routes>

            {staticRoutes}

            {roundRoutes}

            {categoryRoutes}

        </Routes>
    );
};

export default AppRoutes;
