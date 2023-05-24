import React, {useState} from 'react';
import style from './Pack.module.css'

export const Pack = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPack = () => {
        setIsOpen(true);

        // Simulate an API call or delay to fetch pack contents
        setTimeout(() => {
            // TODO: Handle pack contents logic
        }, 2000); // Change the delay as needed
    };

    return (
        <div className={style.wrapper}>
            <div className={isOpen ? `${style.pack} ${style.open}` : `${''}`} onClick={()=>setIsOpen(false)}>

            </div>
            {isOpen && <div className={style.shimmerEffect}>

            </div>}
            {isOpen && <div className={style.glowEffect}>

            </div>}
            {!isOpen && <button className={style.openPackButton} onClick={handleOpenPack}>
                Open Pack
            </button>
            }
        </div>
    );
};

