import * as React from "react";
import style from "./TournamentPage.module.scss";
import {useAppDispatch} from "../../store/hooks";
import {setModal, setStakingNftErrorModal, setTournamentsModal, setVoteModal} from "../../store/appSlice";
import {useNavigate} from "react-router-dom";

import cardBack from "../../assets/png/cards/tournament page/desktop.png";
import cardIcon0 from "../../assets/png/icons/tournament page/card icon 0.png";
import cardIcon1 from "../../assets/png/icons/tournament page/card icon 1.png";
import cardIcon2 from "../../assets/png/icons/tournament page/card icon 2.png";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";

import imgDefault from "../../assets/png/buttons/tournament page card/default.png";
import imgHover from "../../assets/png/buttons/tournament page card/hover.png";
import imgClick from "../../assets/png/buttons/tournament page card/click.png";

export const TournamentPage = () => {
    const userIsStakingNft = true;

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const cards = [
        {
            title: "End in 3H:24M:24S",
            icon: cardIcon0,
            buttonLabel: "PLAY",
            onClick: () => {
                if (!userIsStakingNft) {
                    dispatch(setModal(true));
                    dispatch(setStakingNftErrorModal(true));
                } else {
                    navigate("/app2/play")
                }
            },
        },
        {
            title: "",
            icon: cardIcon1,
            buttonLabel: "STAKE YOUR NFT",
            onClick: () => navigate("/app2/stacking"),
        },
        {
            title: "Start in 3H:24M:24S",
            icon: cardIcon2,
            buttonLabel: "VOTE",
            onClick: () => {
                if (!userIsStakingNft) {
                    dispatch(setModal(true));
                    dispatch(setStakingNftErrorModal(true));
                } else {
                    dispatch(setModal(true));
                    //dispatch(setVoteModal(true));
                    dispatch(setTournamentsModal(true));
                }
            },
        },
    ];

    return (
        <div className={style.tournamentPage}>
            <div className={style.inner}>
                {
                    cards.map(({title, icon, buttonLabel, onClick}, index) => (
                        <div key={index}
                             className={style.card}
                        >
                            <p className={style.title}>{title}</p>

                            <img className={style.back} src={cardBack} alt=""/>

                            <img className={style.icon} src={icon} alt=""/>

                            <ButtonCustom className={style.cardBtn}
                                          onClick={onClick}
                                          widthMobile={296}
                                          heightMobile={75}
                                          widthDesktop={296}
                                          heightDesktop={75}
                                          imgMobileDefault={imgDefault}
                                          imgMobileClick={imgClick}
                                          imgDesktopDefault={imgDefault}
                                          imgDesktopHover={imgHover}
                                          imgDesktopClick={imgClick}
                            >
                                <p>{buttonLabel}</p>
                            </ButtonCustom>

                            {/*<button className={style.btn}*/}
                            {/*        onClick={onClick}*/}
                            {/*>*/}
                            {/*    <img src={btn} alt=""/>*/}
                            {/*    <p>{buttonLabel}</p>*/}
                            {/*</button>*/}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}