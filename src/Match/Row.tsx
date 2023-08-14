import React, {FC, useState} from 'react';
import style from './Row.module.css'
import lockImage from '../Common/Assets/images/lock.png'
import {ModalMenu} from "./ModalMenu/ModalMenu";
import {useSelector} from "react-redux";
import {RootState} from "../Store/store";

interface IRow {
    number: number
    name: string
    difficult: string
    play: string
    description: string
    day: string
    bestLevel: number
    bestPoints: number
}

export const Row: FC<IRow> = ({number, name, difficult, play, description, day, bestLevel, bestPoints}) => {
   const isAvailable = bestLevel>number
    const [isShown, setIsShown] = useState(false);
    const colorScheme = useSelector<RootState, string>(state => state.colorScheme.scheme)

    return (

        <div className={style.wrapper}>

                    <div className={style.container}>

                        {isAvailable ?
                            <button
                                className={ isShown &&  day === 'monday' ? ` ${style.day} ${style[colorScheme]}  ${style.active}` : day === 'monday' ? ` ${style.day} ${style[colorScheme]}  ${style.monday}` : `${style.day} ${style.hidden}`}
                                onClick={()=>setIsShown(true)}>
                                                     {number} / ПН
                            </button>

                        :
                            <button className={day === 'monday' ? ` ${style.day} ${style[colorScheme]}  ${style.monday}` : `${style.day} ${style[colorScheme]}  ${style.hidden}`}
                                    onClick={()=>setIsShown(true)}>
                                <img src={lockImage} alt={'level is lock'}/>
                            </button>
                        }

                        {isAvailable ?
                            <button
                                className={isShown &&  day === 'wednesday' ? ` ${style.day} ${style[colorScheme]}   ${style.active}` :day === 'wednesday' ? `${style.day} ${style[colorScheme]} ${style.wednesday}` : `${style.day} ${style.hidden}`}
                                onClick={()=>setIsShown(true)}>

                                    {number} / СР


                            </button>

                            :
                            <button className={day === 'wednesday' ? `${style.day} ${style[colorScheme]}  ${style.wednesday}` : `${style.day} ${style[colorScheme]}  ${style.hidden}`}
                                    onClick={()=>setIsShown(true)}>
                                <img src={lockImage} alt={'level is lock'}/>
                            </button>
                        }

                        {isAvailable ?
                            <button
                                className={isShown &&  day === 'friday' ? ` ${style.day} ${style[colorScheme]}  ${style.active}` :day === 'friday' ? `${style.day} ${style[colorScheme]}  ${style.friday}` : `${style.day} ${style.hidden}`}
                                onClick={()=>setIsShown(true)}>

                                    {number} / ПТ


                            </button>

                            :
                            <button className={day === 'friday' ? `${style.day} ${style[colorScheme]} ${style.friday}` : `${style.day} ${style[colorScheme]}  ${style.hidden}`}
                                    onClick={()=>setIsShown(true)}>
                                <img src={lockImage} alt={'level is lock'}/>
                            </button>
                        }

                        {isAvailable ?
                            <button
                                className={isShown &&  day === 'additional' ? ` ${style.day} ${style[colorScheme]} ${style.active}` :day === 'additional' ? `${style.day} ${style[colorScheme]} ${style.additional}` : `${style.day} ${style.hidden}`}
                                onClick={()=>setIsShown(true)}>

                                    {number} / Доп


                            </button>

                            :
                            <button className={day === 'additional' ? `${style.day} ${style[colorScheme]} ${style.additional}` : `${style.day} ${style.hidden}`}
                                    onClick={()=>setIsShown(true)}>
                                <img src={lockImage} alt={'level is lock'}/>
                            </button>
                        }


                    </div>

            {isAvailable
                ?
                <ModalMenu isShown={isShown} setIsShown={setIsShown} name={name} description={description} path={play} bestPoints={bestPoints}/>
                :
                <ModalMenu isShown={isShown} setIsShown={setIsShown} name={'Уровень недоступен'} description={"Пройдите предыдущий уровень"} path={'/match'} bestPoints={0}/>
            }

        </div>
    );
};

