import * as React from "react";
import style from "./TournamentPage.module.scss";
import {svgIcons} from "../../assets/svg/svgIcons";
import btn from "../../assets/png/buttons/tournament page card/desktop.png";
import {useAppDispatch} from "../../store/hooks";
import {setModal, setStakingNftErrorModal, setVoteModal} from "../../store/appSlice";
import {useNavigate} from "react-router-dom";

export const TournamentPage = () => {
    const userIsStakingNft = true;

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const cards = [
        {
            title: "End in 3H:24M:24S",
            icon: svgIcons.tournamentPageIcon0,
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
            icon: svgIcons.tournamentPageIcon1,
            buttonLabel: "STAKE YOUR NFT",
            onClick: () => navigate("/app2/stacking"),
        },
        {
            title: "Start in 3H:24M:24S",
            icon: svgIcons.tournamentPageIcon1,
            buttonLabel: "VOTE",
            onClick: () => {
                if (!userIsStakingNft) {
                    dispatch(setModal(true));
                    dispatch(setStakingNftErrorModal(true));
                } else {
                    dispatch(setModal(true));
                    dispatch(setVoteModal(true));
                }
            },
        },
    ];

    return (
        <div className={style.tournamentPage}>
            <div className={style.inner}>
                {
                    cards.map(({title, icon, buttonLabel,onClick}, index) => (
                        <div key={index}
                             className={style.card}
                        >
                            <p className={style.title}>{title}</p>
                            <div className={style.back}>{svgIcons.tournamentPageCardBack}</div>
                            <div className={style.icon}>{icon}</div>
                            <button className={style.btn}
                                    onClick={onClick}
                            >
                                <img src={btn} alt=""/>
                                <p>{buttonLabel}</p>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}