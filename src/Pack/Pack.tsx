import React, {useState} from 'react';
import style from './Pack.module.css'
import okIcon from "../assets/images/match/ok.svg";
import cancelIcon from "../assets/images/match/cancel.svg";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/store";
import {PointsAfterShop} from "../Store/profileReducer";

export const Pack = () => {

    const dispatch = useDispatch<AppDispatch>();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isConfirmed, setConfirmed] = useState<boolean>(false)

    const handleOpenPack = () => {
        setConfirmed(true)
        //setIsOpen(true);
        setLoot(GeneratePackDrop())
        // Simulate an API call or delay to fetch pack contents
        setTimeout(() => {
            // TODO: Handle pack contents logic
        }, 2000); // Change the delay as needed
    };

    const openPack = () => {
        setConfirmed(false)
        dispatch(PointsAfterShop(1))
        setIsOpen(true);
    }
    const cancelPack = () =>{
        setConfirmed(false)
    }
    const [loot, setLoot] = useState<string>('')
    const GeneratePackDrop = (): string => {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
            return '1';
        } else if (randomNum < 0.85) {
            return '2';
        } else {
            return '3';
        }
    }

    return (
        <div className={style.wrapper}>

            <div className={isOpen ? `${style.pack} ${style.open}` : `${''}`} onClick={() => setIsOpen(false)}>

            </div>
            {/*{isOpen && <div className={style.shimmerEffect}>*/}

            {/*</div>}*/}
            {isOpen && <div className={style.glowEffect}>
                {loot}
            </div>}
            {isConfirmed && <div className={style.confirmModal}>
                <div className={style.modalWindow}>
                    <div className={style.message}>
                        Вы хотите купить этот набор за 1 монет?
                    </div>
                    <div className={style.buttons}>
                        <img src={okIcon} alt={'ok'}
                             onClick={openPack}/>
                        <img src={cancelIcon} alt={'cancel'}
                             onClick={cancelPack}/>
                    </div>
                </div>




            </div>}
            {!isOpen && <button className={style.openPackButton} onClick={handleOpenPack}>
                Open Pack
            </button>
            }

        </div>
    );
};

