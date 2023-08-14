import React, {ChangeEvent, useState} from 'react';
import style from './Profile.module.css'
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";
import editIcon from '../assets/images/match/edit.svg'
import okIcon from '../assets/images/match/ok.svg'
import cancelIcon from '../assets/images/match/cancel.svg'
import {saveNewName} from "../Store/PlayerNameReducer";
import {ImagesData} from "./images.data";
import {saveNewAvatar} from "../Store/PlayerAvatarReducer";
import {ImageComponent} from "./ImageComponenet";
import {Accordion} from "../Match/BonusMachine/BonusMachine";
import shopIcon from '../assets/images/match/shop.svg'
import multiplyBonusBG from '../assets/images/match/bg/multiplyBonusBG.svg'
import profileBonusBG from '../assets/images/match/bg/ProfileCoinsBG.svg'
import timeBonusBG from '../assets/images/match/bg/timeBonusBG.svg'
import {showProductPicture} from "../Store/machineReducer";
import {Link} from "react-router-dom";
import {PATH} from "../AppRoutes/AppRoutes";
import {CategoryType} from "../Match/BonusMachine/bomusMachine.data";
import {useBonus} from "../hooks/useBonus";
import {changeColorScheme} from "../Store/colorSchemeReducer";


export const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentPoints = useSelector<RootState, number>(state => state.profile.currentPoints)
    const playerName = useSelector<RootState, string>(state => state.playerName.name)
    const playerAvatar = useSelector<RootState, string>(state => state.playerAvatar.avatar)

    const colorScheme = useSelector<RootState, string>(state => state.colorScheme.scheme)
    const handleSchemeChange = (newScheme: string) => {
        dispatch(changeColorScheme(newScheme));
    };

    const [isEditName, setIsEditName] = useState<boolean>(false)
    const [newName, setNewName] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.currentTarget.value)
    }
    const saveNameToRedux = (name: string) => {
        dispatch(saveNewName(newName))
        setIsEditName(false)
    }
    const cancelChangingName = () => {
        setNewName('')
        setIsEditName(false)
    }

    const [isEditAvatar, setIsEditAvatar] = useState<boolean>(false)
    const [newAvatar, setNewAvatar] = useState<string>('')
    const [selectedImage, setSelectedImage] = useState<string>('')

    const saveTemporaryAvatar = (image: string) => {
        setNewAvatar(image)
        setSelectedImage(image);
    };

    const saveAvatarToRedux = () => {
        dispatch(saveNewAvatar(newAvatar))

        setIsEditAvatar(false)
    }

    const {secondsBonus, multiplyBonus} = useBonus()
const metelli = true
    const brandStyle = metelli ? `${style.wrapper} ${style.metelli} `:` ${style.wrapper}`


    return (
        <div className={`${style.wrapper} ${style[colorScheme]}`}>
            <header className={`${style.header} ${style[colorScheme]}`}>
                <BackArrow path={'../../match'}/>
                <div className={style.changeScheme}>
                    <button onClick={() => handleSchemeChange('default')}>Default Scheme</button>
                    <button onClick={() => handleSchemeChange('metelli')}>Metelli Scheme</button>
                    <button onClick={() => handleSchemeChange('lynx')}>Lynx Scheme</button>
                    <button onClick={() => handleSchemeChange('mann')}>Mann Scheme</button>
                    <button onClick={() => handleSchemeChange('asMetall')}>As Metall Scheme</button>
                    <button onClick={() => handleSchemeChange('bluePrint')}>Blue Print Scheme</button>
                </div>
                <div className={style.pointsContainer} style={{backgroundImage: `url(${profileBonusBG})`}}>
                    {currentPoints}
                </div>
                <Link to={PATH.SHOP}>
                    <div className={style.shop}>
                        <img src={shopIcon} alt={'shop'}/>
                    </div>
                </Link>


            </header>
            <div className={`${style.infoContainer} ${style[colorScheme]}`}>
                {isEditAvatar
                    ?
                    <div className={`${style.avatarsWrapper} ${style[colorScheme]}`}>
                        {ImagesData.map(image => <ImageComponent key={image.image}
                                                                 image={image.image}
                                                                 onClick={() => saveTemporaryAvatar(image.image)}
                                                                 isSelected={selectedImage === image.image}

                        />)}
                        <div className={style.buttons}>
                            <img src={okIcon} alt={'ok'}
                                 onClick={saveAvatarToRedux}/>
                            <img src={cancelIcon} alt={'cancel'}
                                 onClick={() => setIsEditAvatar(false)}/>
                        </div>

                    </div>
                    :
                    <div className={`${style.avatarContainer} ${style[colorScheme]}`}>
                        <img src={playerAvatar} alt={'avatar'}/>
                        <div className={style.pencil}>
                            <img src={editIcon}
                                 alt={'edit name'}
                                 onClick={() => setIsEditAvatar(true)}/>
                        </div>
                    </div>
                }


                <div className={`${style.nameContainer} ${style[colorScheme]}`}>
                    {isEditName
                        ?
                        <div className={style.edit}>
                            <input value={newName}
                                   onChange={onChangeHandler}
                                   placeholder={'Введите имя...'}
                            />
                            <img src={okIcon} alt={'ok'}
                                 onClick={() => saveNameToRedux(newName)}/>
                            <img src={cancelIcon} alt={'cancel'}
                                 onClick={cancelChangingName}/>
                        </div>
                        :
                        <div className={style.edit}>
                            <div className={style.name}>{playerName}</div>
                            <div className={style.pencil}>
                                <img src={editIcon}
                                     alt={'edit name'}
                                     onClick={() => setIsEditName(true)}/>
                            </div>
                        </div>}


                </div>
            </div>
            <div className={style.bonuses}>
                <div className={style.bonusItem} style={{backgroundImage: `url(${timeBonusBG})`}}>
                    Бонус времени: {secondsBonus} секунд
                </div>
                <div className={style.bonusItem}  style={{backgroundImage: `url(${multiplyBonusBG})`}}>
                    Бонус множителя очков: Х {multiplyBonus.toFixed(2)}
                </div>
            </div>
            <Accordion/>
        </div>
    );
};

