import React, {FC} from 'react';
import style from './Row.module.css'
import {Link} from "react-router-dom";
import lockImage from '../Common/Assets/images/lock.png'

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
    return (
        // <div className={style.wrapper}>
        //     <div className={style.container}>
        //         <div className={style.number}>
        //             {number}
        //         </div>
        //         <div className={style.nameAndDescription}>
        //             <div className={style.name}>{name}</div>
        //             <div className={style.description}>{description}</div>
        //
        //         </div>
        //         <div className={style.difficult}>
        //             {difficult}
        //         </div>
        //
        //             <button className={style.play}>
        //                 {bestLevel<number ? "замок" :    <Link to={play}>
        //                     Играть
        //                 </Link> }
        //               {/*  <Link to={play}>*/}
        //               {/*Играть*/}
        //               {/*  </Link>*/}
        //             </button>
        //
        //
        //     </div>
        // </div>
        <div className={style.wrapper}>

                    <div className={style.container}>

                        {isAvailable ?
                            <button
                                className={day === 'monday' ? ` ${style.day} ${style.monday}` : `${style.day} ${style.hidden}`}>
                                                 <Link to={play}>
                                                     {number} / ПН
                                                 </Link>
                            </button>

                        :
                            <button className={day === 'monday' ? ` ${style.day} ${style.monday}` : `${style.day} ${style.hidden}`}>
                                <img src={lockImage} alt={'level is lock'}/>
                            </button>
                        }

                        {isAvailable ?
                            <button
                                className={day === 'wednesday' ? `${style.day} ${style.wednesday}` : `${style.day} ${style.hidden}`}>
                                <Link to={play}>
                                    {number} / СР
                                </Link>

                            </button>

                            :
                            <button className={day === 'wednesday' ? `${style.day} ${style.wednesday}` : `${style.day} ${style.hidden}`}>
                                <img src={lockImage} alt={'level is lock'}/>
                            </button>
                        }

                        {isAvailable ?
                            <button
                                className={day === 'friday' ? `${style.day} ${style.friday}` : `${style.day} ${style.hidden}`}>
                                <Link to={play}>
                                    {number} / ПТ
                                </Link>

                            </button>

                            :
                            <button className={day === 'friday' ? `${style.day} ${style.friday}` : `${style.day} ${style.hidden}`}>
                                <img src={lockImage} alt={'level is lock'}/>
                            </button>
                        }

                        {isAvailable ?
                            <button
                                className={day === 'additional' ? `${style.day} ${style.additional}` : `${style.day} ${style.hidden}`}>
                                <Link to={play}>
                                    {number} / Доп
                                </Link>

                            </button>

                            :
                            <button className={day === 'additional' ? `${style.day} ${style.additional}` : `${style.day} ${style.hidden}`}>
                                <img src={lockImage} alt={'level is lock'}/>
                            </button>
                        }


                    </div>



        </div>
    );
};

