import React, {ChangeEvent, useState} from 'react';
import style from './Profile.module.css'
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import settingsIcon from '../assets/images/match/settings.svg'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";
import editIcon from '../assets/images/match/edit.svg'
import okIcon from '../assets/images/match/ok.svg'
import cancelIcon from '../assets/images/match/cancel.svg'
import {saveNewName} from "../Store/PlayerNameReducer";
import {ImagesData} from "./images.data";
import {saveNewAvatar} from "../Store/PlayerAvatarReducer";

export const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentPoints = useSelector<RootState, number>(state => state.profile.currentPoints)
    const playerName = useSelector<RootState, string>(state => state.playerName.name)
    const playerAvatar = useSelector<RootState, string>(state => state.playerAvatar.avatar)

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
    // const [newAvatar, setNewAvatar] = useState<string>('')
    const saveAvatarToRedux = (avatar: string) => {
        dispatch(saveNewAvatar(avatar))
    }

    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <BackArrow path={'../../match'}/>
                <div className={style.pointsContainer}>
                    {currentPoints}
                </div>
                <button className={style.settings}>
                    <img src={settingsIcon} alt={'settings'}/>
                </button>
            </header>
            <div className={style.infoContainer}>
                <div className={style.avatarContainer}>
                  <img src={playerAvatar} alt={'avatar'}/>
                </div>

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
            <div className={style.bonusWrapper}>
                {ImagesData.map(image => <img className={style.avatarItem}
                                              src={image.image}
                                              key={image.image}
                                              alt={image.image}
                                              onClick={() => saveAvatarToRedux(image.image)}/>)}
                Bonus Machine
            </div>
        </div>
    );
};

