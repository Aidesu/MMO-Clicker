import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import PlayerCard from "./components/PlayerCard/PlayerCard";
import Home from "./assets/Pages/Home/Home";
import FarmZone from "./assets/Pages/FarmZone/FarmZone";
import Dungeon from "./assets/Pages/Dungeon/Dungeon";
import Village from "./assets/Pages/Village/Village";
import Bestiary from "./assets/Pages/Bestiary/Bestiary";
import Profile from "./assets/Pages/Profile/Profile";
import Error404 from "./assets/Pages/Error404/Error404";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <PlayerCard
                    user="Deafiaa"
                    class="Witch"
                    deny="42135"
                    level="299"
                    experience="1982/4000"
                    life="756/994"
                    userTitle="Bloody Queen"
                    mana="500/500"
                    image="https://wallpapers-clan.com/wp-content/uploads/2022/07/kuromi-pfp-1.jpg"
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dungeon" element={<Dungeon />} />
                    <Route path="/maps" element={<FarmZone />} />
                    <Route path="/village" element={<Village />} />
                    <Route path="/bestiary" element={<Bestiary />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
