import React, {useEffect, useState} from 'react';
import style from './Game.module.css'
import {Song} from "./Song/Song";


//const testSong = require("./../Common/Assets/audio/a.mp3")
const demoSun = require('./../Common/Assets/audio/d-sun.mp3')
const demoSunOr = require('./../Common/Assets/audio/d-sun2.mp3')

const monacoSun  = require('./../Common/Assets/audio/L-monaco-sun.mp3')
const monacoSunOr  = require('./../Common/Assets/audio/LyusyaChebotina-monako.mp3')

const olegMityaev = require('./../Common/Assets/audio/OlegMityaev-leto.mp3')
const olegMityaevOr = require('./../Common/Assets/audio/OlegMityaev-leto2.mp3')


export const Game = () => {

    return (
        <div className={style.wrapper}>
           {/*<Song track={testSong}/>*/}
            <Song track={demoSun} original={demoSunOr}/>
            <Song track={monacoSun} original={monacoSunOr}/>
            <Song track={olegMityaev} original={olegMityaevOr}/>
        </div>
    );
};

