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
import {showProductPicture} from "../Store/machineReducer";
import {Link} from "react-router-dom";
import {PATH} from "../AppRoutes/AppRoutes";
import {CategoryType} from "../Match/BonusMachine/bomusMachine.data";
import {useBonus} from "../hooks/useBonus";


export const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentPoints = useSelector<RootState, number>(state => state.profile.currentPoints)
    const playerName = useSelector<RootState, string>(state => state.playerName.name)
    const playerAvatar = useSelector<RootState, string>(state => state.playerAvatar.avatar)
    const timeBonus = useSelector<RootState, number>(state => state.bonus.timeBonus)
    const pointBonus = useSelector<RootState, number>(state => state.bonus.pointsBonus)
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


    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <BackArrow path={'../../match'}/>
                <div className={style.pointsContainer}>
                    {currentPoints}
                </div>
                <Link to={PATH.SHOP}>
                    <div className={style.shop}>
                        <img src={shopIcon} alt={'shop'}/>
                    </div>
                </Link>


            </header>
            <div className={style.infoContainer}>
                {isEditAvatar
                    ?
                    <div className={style.avatarsWrapper}>
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
                    <div className={style.avatarContainer}>
                        <img src={playerAvatar} alt={'avatar'}/>
                        <div className={style.pencil}>
                            <img src={editIcon}
                                 alt={'edit name'}
                                 onClick={() => setIsEditAvatar(true)}/>
                        </div>
                    </div>
                }


                <div className={style.nameContainer}>
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
                <div className={style.bonusItem}>
                    Бонус времени: {secondsBonus} секунд
                </div>
                <div className={style.bonusItem}>
                    Бонус множителя очков: Х {multiplyBonus.toFixed(2)}
                </div>
            </div>
            <Accordion/>
        </div>
    );
};

