import * as React from "react";
import style from "./TournamentsModal.module.scss";
import {useRef} from "react";
import {useAppDispatch} from "../../../../store/hooks";
import {setModal, setTournamentsModal} from "../../../../store/appSlice";
import {useOutsideClick} from "../../../../hooks/useOutsideClick";
import yes from "../../../../assets/png/buttons/time left modal/yes.png";
import no from "../../../../assets/png/buttons/time left modal/no.png";

import modalBack from "../../../../assets/png/modal/tournaments.png";

export const TournamentsModal = () => {
    const ref = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();

    const onClose = () => {
        dispatch(setModal(false));
        dispatch(setTournamentsModal(false));
    }

    useOutsideClick(ref, onClose);

    return (
        <div className={style.tournamentsModal}>
            <div className={style.content} ref={ref}>

                <img className={style.back}
                     src={modalBack}
                     alt=""
                />

                <p className={style.title}>Tournaments</p>

                <p className={style.description}>
                    Do you want to end the game and split the prize pool between 30 players?
                </p>

                <div className={style.buttons}>
                    <button>
                        <img src={yes} alt=""/>
                        <p>yes</p>
                        <span>152 votes</span>
                    </button>
                    <button>
                        <img src={no} alt=""/>
                        <p>no</p>
                        <span>152 votes</span>
                    </button>
                </div>

            </div>
        </div>
    )
}