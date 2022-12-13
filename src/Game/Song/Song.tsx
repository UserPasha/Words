import React, {FC, useEffect, useState} from 'react';
import style from './Song.module.css'

import cover from './../../Common/Assets/images/vinylM.png'

type songType = {
    track: string
    original: string
}

export const Song:FC<songType> = ({track, original}) => {

    const audioElement = new Audio(track);
    const originalTrack = new Audio(original)

    const [playing, setPlaying] = useState(false)
    const [originalPlaying, setOriginalPlaying] = useState(false)

    useEffect(() => {
        playing ? audioElement.play() : audioElement.pause();
        return () => audioElement.pause();

    }, [playing]);
    useEffect(() => {
        originalPlaying ? originalTrack.play() : originalTrack.pause();
        return () => originalTrack.pause();

    }, [originalPlaying]);
    function togglePlay() {

        setPlaying(s => !s);
    }
    function originalTogglePlay() {

        setOriginalPlaying(s => !s);
    }

    return (
        <div className={style.container}>

            <img className={playing ? style.playingCover : style.cover} src={cover} alt={'cover'}/>


            <button onClick={() => togglePlay()}>{playing ? "Stop" : "Play"}</button>

            <button onClick={() => originalTogglePlay()}>{originalPlaying ? "Stop2" : "Play2"}</button>



        </div>
    );
};

;