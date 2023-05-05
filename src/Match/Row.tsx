import React, {FC, useState} from 'react';
import style from './Row.module.css'
import {Link} from "react-router-dom";
import lockImage from '../Common/Assets/images/lock.png'
import {ModalMenu} from "./ModalMenu/ModalMenu";

interface IRow {
    number: number
    name: string
    difficult: string
    play: string
    description: string
    day: string
    bestLevel: number
}

export const Row: FC<IRow> = ({number, name, difficult, play, description, day, bestLevel}) => {
   const isAvailable = bestLevel>number
    const [isShown, setIsShown] = useState(false);
   const unAvailable = {name: 'Уроаень недоступен', description: "Пройдите предыдущий уровень", play: ''}
    return (

        <div className={style.wrapper}>

                    <div className={style.container}>

                        {isAvailable ?
                            <button
                                className={day === 'monday' ? ` ${style.day} ${style.monday}` : `${style.day} ${style.hidden}`}
                                onClick={()=>setIsShown(true)}>
                                                     {number} / ПН
                            </button>

                        :
                            <button className={day === 'monday' ? ` ${style.day} ${style.monday}` : `${style.day} ${style.hidden}`}
                            >
                                <img src={lockImage} alt={'level is lock'}/>
                            </button>
                        }

                        {isAvailable ?
                            <button
                                className={day === 'wednesday' ? `${style.day} ${style.wednesday}` : `${style.day} ${style.hidden}`}
                                onClick={()=>setIsShown(true)}>

                                    {number} / СР


                            </button>

                            :
                            <button className={day === 'wednesday' ? `${style.day} ${style.wednesday}` : `${style.day} ${style.hidden}`}
                                    >
                                <img src={lockImage} alt={'level is lock'}/>
                            </button>
                        }

                        {isAvailable ?
                            <button
                                className={day === 'friday' ? `${style.day} ${style.friday}` : `${style.day} ${style.hidden}`}
                                onClick={()=>setIsShown(true)}>

                                    {number} / ПТ


                            </button>

                            :
                            <button className={day === 'friday' ? `${style.day} ${style.friday}` : `${style.day} ${style.hidden}`}
                               >
                                <img src={lockImage} alt={'level is lock'}/>
                            </button>
                        }

                        {isAvailable ?
                            <button
                                className={day === 'additional' ? `${style.day} ${style.additional}` : `${style.day} ${style.hidden}`}
                                onClick={()=>setIsShown(true)}>

                                    {number} / Доп


                            </button>

                            :
                            <button className={day === 'additional' ? `${style.day} ${style.additional}` : `${style.day} ${style.hidden}`}>
                                <img src={lockImage} alt={'level is lock'}/>
                            </button>
                        }


                    </div>


            <ModalMenu isShown={isShown} setIsShown={setIsShown} name={name} description={description} path={play}/>
        </div>
    );
};

