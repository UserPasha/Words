import React, {useEffect, useState} from 'react';
import style from './Game.module.css'
import {Song} from "./Song/Song";
import {Header} from "./Header/Header";



//leto

const demoSun = require('./../Common/Assets/audio/d-sun.mp3')
const demoSunOr = require('./../Common/Assets/audio/d-sun2.mp3')

const monacoSun = require('./../Common/Assets/audio/L-monaco-sun.mp3')
const monacoSunOr = require('./../Common/Assets/audio/LyusyaChebotina-monako.mp3')

const olegMityaev = require('./../Common/Assets/audio/OlegMityaev-leto.mp3')
const olegMityaevOr = require('./../Common/Assets/audio/OlegMityaev-leto2.mp3')

const ivanushki = require('./../Common/Assets/audio/IvanushkiPuh.mp3')
const ivanushkiOr = require('./../Common/Assets/audio/IvanushkiPuh2.mp3')

const fabrika = require('./../Common/Assets/audio/Fabrika-minus.mp3')
const fabrikaOr = require('./../Common/Assets/audio/Fabrika-plus.mp3')

//zima

const gradusi = require('./../Common/Assets/audio/Gradusy-Zametaet.mp3')
const gradusiOr = require('./../Common/Assets/audio/Gradusi-Zamet.mp3')

const VarumVishnya = require('./../Common/Assets/audio/Anjelica-Vishnya.mp3')
const VarumVishnyaOr = require('./../Common/Assets/audio/Anjelica-Vish.mp3')

const GostiZima = require('./../Common/Assets/audio/Gosti-zima.mp3')
const GostiZimaOr = require('./../Common/Assets/audio/Gosti-Zima2.mp3')

const GubinZima = require('./../Common/Assets/audio/Gubin-Zima.mp3')
const GubinZimaOr = require('./../Common/Assets/audio/Gosti-Zima2.mp3')

const RotaruZima = require('./../Common/Assets/audio/Rotaru-Zima.mp3')
const RotaruZimaOr = require('./../Common/Assets/audio/Rotaru-Zima2.mp3')

//rock
const kishLesnik = require('./../Common/Assets/audio/Kish-Lesnik.mp3')
const kishLesnikOr = require('./../Common/Assets/audio/Kish-Lesnik3.mp3')

const sectorLyrica = require('./../Common/Assets/audio/Secktor-Lyr.mp3')
const sectorLyricaOr = require('./../Common/Assets/audio/Sector-lyr2.mp3')

const zveriNapitki = require('./../Common/Assets/audio/Zveri-Napitki.mp3')
const zveriNapitkiOr = require('./../Common/Assets/audio/Zveri-Napitki2.mp3')

const chicherinaTula = require('./../Common/Assets/audio/Chicherina-tula.mp3')
const chicherinaTulaOr = require('./../Common/Assets/audio/Chicherina-tula2.mp3')

const ddtMinus = require('./../Common/Assets/audio/ddt-minus.mp3')
const ddtMinusOr = require('./../Common/Assets/audio/ddt-plus.mp3')

//soundtrack
const adelleSky = require('./../Common/Assets/audio/Adelle-Skyfall.mp3')
const adelleSkyOr = require('./../Common/Assets/audio/Adele - SkyfalPl.mp3')

const pinkPanter = require('./../Common/Assets/audio/Henry Mancini - The Pink Panther.mp3')
const pinkPanterOr = require('./../Common/Assets/audio/Henry Mancini - The Pink Panther2.mp3')

const killBill = require('./../Common/Assets/audio/Tomoyasu Hotei - Battle Without Honor or Humanity.mp3')

const ninaIvan = require('./../Common/Assets/audio/NinaBrodskaya-ivan.mp3')
const ninaIvanOr = require('./../Common/Assets/audio/nina-ivan.mp3')

const survivorRocky = require('./../Common/Assets/audio/Survivor - Eye of a TigerRocky.mp3')
const survivorRockyOr = require('./../Common/Assets/audio/Survivor - Eye Of The TigerPlus.mp3')

const eminemLose = require('./../Common/Assets/audio/Eminem - Lose YourselfMinus.mp3')
const eminemLoseOr = require('./../Common/Assets/audio/Eminem - Lose YourselfPlus.mp3')

const matrix = require('./../Common/Assets/audio/Propellerheads - SpybreakMatrix.mp3')

const prettyWoman = require('./../Common/Assets/audio/Roy Orbison - Oh, Pretty WomanMinus.mp3')
const prettyWomanOr = require('./../Common/Assets/audio/Roy Orbison - Oh, Pretty WomanPlus.mp3')

//names

const iraklyVova = require('./../Common/Assets/audio/Irakli-vovaM.mp3')
const iraklyVovaOr = require('./../Common/Assets/audio/Irakly-VovaP.mp3')

const AllegrovaAndrey = require('./../Common/Assets/audio/Irina_Allegr_PrivMinus.mp3')
const AllegrovaAndreyOr = require('./../Common/Assets/audio/Irina_Allegrova-AndreyP.mp3')

const RukiAleshka = require('./../Common/Assets/audio/rukiAleshakaM.mp3')
const RukiAleshkaOr = require('./../Common/Assets/audio/RukiAleshkaP.mp3')

const EstradaVite = require('./../Common/Assets/audio/ESTRADARADA-ViteM.mp3')
const EstradaViteOr = require('./../Common/Assets/audio/Estradarada-ViteP.mp3')

const GlukozaUra = require('./../Common/Assets/audio/Glyukoza_YuraM.mp3')
const GlukozaUraOr = require('./../Common/Assets/audio/Glukoza_YuraP.mp3')

//vostok amer-rock covers names
export const Game = () => {

    return (
        <>
            <Header/>
            <div className={style.wrapper}>
                {/*<Song track={testSong}/>*/}
                <div className={style.container}>
                    <div className={style.category}>
                        ЛЕТО
                    </div>
                    {/*<Song track={testSong} original={testSong}/>*/}
                    {/*<Song track={demoSun} original={demoSunOr}/>*/}
                    {/*<Song track={monacoSun} original={monacoSunOr}/>*/}
                    {/*<Song track={ivanushki} original={ivanushkiOr}/>*/}
                    {/*<Song track={fabrika} original={fabrikaOr}/>*/}
                    {/*<Song track={olegMityaev} original={olegMityaevOr}/>*/}
                </div>
                <div className={style.container}>
                    <div className={style.category}>
                        ЗИМА
                    </div>
                    {/*<Song track={GubinZima} original={GubinZimaOr}/>*/}
                    {/*<Song track={VarumVishnya} original={VarumVishnyaOr}/>*/}
                    {/*<Song track={GostiZima} original={GostiZimaOr}/>*/}
                    {/*<Song track={RotaruZima} original={RotaruZimaOr}/>*/}
                    {/*<Song track={gradusi} original={gradusiOr}/>*/}

                </div>
                <div className={style.container}>
                    <div className={style.category}>
                        РУССКИЙ РОК
                    </div>
                    {/*<Song track={sectorLyrica} original={sectorLyricaOr}/>*/}
                    {/*<Song track={zveriNapitki} original={zveriNapitkiOr}/>*/}
                    {/*<Song track={kishLesnik} original={kishLesnikOr}/>*/}
                    {/*<Song track={chicherinaTula} original={chicherinaTulaOr}/>*/}
                    {/*<Song track={ddtMinus} original={ddtMinusOr}/>*/}

                </div>
                <div className={style.container}>
                    <div className={style.category}>
                        ФИЛЬМЫ
                    </div>
                    {/*<Song track={pinkPanter} original={pinkPanterOr}/>*/}
                    {/*<Song track={adelleSky} original={adelleSkyOr}/>*/}
                    {/*<Song track={ninaIvan} original={ninaIvanOr}/>*/}
                    {/*<Song track={survivorRocky} original={survivorRockyOr}/>*/}
                    {/*<Song track={prettyWoman} original={prettyWomanOr}/>*/}

                    {/*<Song track={killBill} original={killBill}/>*/}
                    {/*<Song track={eminemLose} original={eminemLoseOr}/>*/}
                    {/*<Song track={matrix} original={matrix}/>*/}


                </div>

                <div className={style.container}>
                    <div className={style.category}>
                        МУЖСКИЕ ИМЕНА
                    </div>
                    {/*<Song track={iraklyVova} original={iraklyVovaOr}/>*/}
                    {/*<Song track={AllegrovaAndrey} original={AllegrovaAndreyOr}/>*/}
                    {/*<Song track={RukiAleshka} original={RukiAleshkaOr}/>*/}
                    {/*<Song track={EstradaVite} original={EstradaViteOr}/>*/}
                    {/*<Song track={GlukozaUra} original={GlukozaUraOr}/>*/}


                </div>

            </div>
        </>
    );
};

