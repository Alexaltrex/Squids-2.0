import * as React from "react";
import style from "./GameplayModal.module.scss";
import {useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {selectNickname, setGameplayModal, setModal} from "../../../../store/appSlice";
import {useOutsideClick} from "../../../../hooks/useOutsideClick";
import useMediaQuery from "@mui/material/useMediaQuery";
import {CloseButton} from "../CloseButton/CloseButton";
import {GameplayModalButton} from "./GameplayModalButton/GameplayModalButton";
import {desktopBreakPoint} from "../../../../constants";

import modalMobile from "../../../../assets/png/modal/gameplay/mobile.png";
import modalDesktop from "../../../../assets/png/modal/gameplay/desktop.png";
import fieldMobile from "../../../../assets/png/cards/gameplay modal field/mobile.png";
import fieldDesktop from "../../../../assets/png/cards/gameplay modal field/desktop.png";

export const GameplayModal = () => {
    const ref = useRef<HTMLDivElement>(null);
    const nickname = useAppSelector(selectNickname);

    const dispatch = useAppDispatch();

    const onClose = () => {
        dispatch(setModal(false));
        dispatch(setGameplayModal(false));
    }

    useOutsideClick(ref, onClose);

    const matchDesktop = useMediaQuery(`(min-width:${desktopBreakPoint}px)`);

    return (
        <div className={style.gameplayModal}>
            <div className={style.content} ref={ref}>

                <CloseButton onClick={onClose} className={style.closeButton}/>

                <img className={style.backModal}
                     src={matchDesktop ? modalDesktop : modalMobile}
                     alt=""
                />

                <p className={style.title}>
                    <span>{nickname}</span><span> Gameplay</span>
                </p>

                <img className={style.field}
                     src={matchDesktop ? fieldDesktop : fieldMobile}
                     alt=""
                />

                <div className={style.buttons}>
                    <GameplayModalButton/>
                    <GameplayModalButton first={false}/>
                </div>

            </div>
        </div>
    )
}