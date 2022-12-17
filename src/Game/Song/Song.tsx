import React, {FC, useEffect, useState} from 'react';
import style from './Song.module.css'
import playIcon from './../../Common/Assets/images/play.svg'
import pauseIcon from './../../Common/Assets/images/pause.svg'
import closeIcon from './../../Common/Assets/images/close.svg'
import arrowDown from './../../Common/Assets/images/arrowDown.svg'
import cover from './../../Common/Assets/images/vinylM.png'
import redClose from './../../Common/Assets/images/redClose.svg'

type songType = {
    track: string
    original: string
}

export const Song: FC<songType> = ({track, original}) => {

    const [result, setResult] = useState<boolean>(false)
    const [over, setOver] = useState<boolean>(false)

    const locker = ()=>{
        setResult(!result)
    }
    const closeSong = () =>{
        setResult(!result)
        setOver(true)
    }

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
        <div className={over ? style.containerOver : playing ? style.containerActive : style.container}>
            <div className={style.base}>
                <img className={playing ? style.playingCover : style.cover} src={cover} alt={'cover'}/>

                <button className={style.button}  disabled={over} onClick={() => togglePlay()}>{
                    over?
                        <img className={style.controls} src={redClose} alt={'closed'}/>
                        :
                    playing ?
                    <img className={style.controls} src={pauseIcon} alt={'pause'}/>
                    :
                    <img className={style.controls} src={playIcon} alt={'play'}/>
                }</button>
            </div>
            <div className={style.panel}  onClick={locker}>
                {!result &&  <img className={style.controls} src={arrowDown} alt={'arrow down'}/>}
            </div>

            {result && <div className={style.hide} >
                <button className={style.button} onClick={() => originalTogglePlay()}>{originalPlaying ?
                    <img className={style.controls} src={pauseIcon} alt={'pause'}/>
                    :
                    <img className={style.controls} src={playIcon} alt={'play'}/>}
                </button>
                <img className={style.controls} src={closeIcon} alt={'close'} onClick={closeSong} />
            </div>}


        </div>
    );
};

;