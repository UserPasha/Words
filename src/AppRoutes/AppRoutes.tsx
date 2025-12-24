import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";

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

import { SmartListComponent } from "../Home/Batis";

const AppRoutes = () => {


    const rounds = useSelector((state: RootState) => state.songs);

    return (
        <Routes>

            {/* --- СТАТИЧЕСКИЕ РОУТЫ --- */}
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

            {/* --- РАУНДЫ --- */}


            <Route
                path="/round/:round/category/:categoryId"
                element={<NewGame />}
            />

            {rounds.map(round => (
                <React.Fragment key={round.round}>
                    {/* Список категорий в раунде */}
                    <Route
                        path={`/round/${round.round}`}
                        element={<Categories CategoryNameAndPath={round.categories}
                                             roundNumber={round.round}
                        />}
                    />

                    {/* Конкретная категория */}

                </React.Fragment>
            ))}


            {/* --- КАТЕГОРИИ --- */}
            {/*{rounds.flatMap(round =>
                round.categories.map(category => (
                    <Route
                        key={`${round.round}_${category.id}`}
                        path={`/round/${round.round}/category/:categoryId`}
                        element={<NewGame  />}
                    />
                ))
            )} */}

        </Routes>
    );
};

export default AppRoutes;
