import React, {useEffect, useState} from 'react';
import style from './Game.module.css'
import cover from './../Common/Assets/images/vinylM.png'

const song = require("./../Common/Assets/audio/a.mp3")


export const Game = () => {
    const audioElement = new Audio(song);

    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        playing ? audioElement.play() : audioElement.pause();
        return () => audioElement.pause();

    }, [playing]);
    function togglePlay() {

        setPlaying(s => !s);
    }







    return (
        <div className={style.wrapper}>
            <div className={style.container}>

                <img className={playing ? style.playingCover : style.cover} src={cover} alt={'cover'}/>


                <button onClick={() => togglePlay()}>{playing ? "Stop" : "Play"}</button>

            </div>
        </div>
    );
};

