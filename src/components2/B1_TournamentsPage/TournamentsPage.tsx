import * as React from "react";
import style from "./TournamentsPage.module.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
import {CardItem} from "./CardItem/CardItem";
import {useAppDispatch} from "../../store/hooks";
import {setLeaderboardModal, setModal} from "../../store/appSlice";
import {useNavigate} from "react-router-dom";
import {desktopBreakPoint} from "../../constants";
import sandTimerIcon from "../../assets/png/icons/sandTimer.png";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";

// leaderboard
import imgMobileDefault from "../../assets/png/buttons/tournaments page - leaderboard/mobileDefault.png";
import imgMobileClick from "../../assets/png/buttons/tournaments page - leaderboard/mobileClick.png";
import imgDesktopDefault from "../../assets/png/buttons/tournaments page - leaderboard/desktopDefault.png";
import imgDesktopHover from "../../assets/png/buttons/tournaments page - leaderboard/desktopHover.png";
import imgDesktopClick from "../../assets/png/buttons/tournaments page - leaderboard/desktopClick.png";

// enter
import mobileDefault from "../../assets/png/buttons/tournaments page - enter/mobileDefault.png";
import mobileClick from "../../assets/png/buttons/tournaments page - enter/mobileClick.png";
import desktopDefault from "../../assets/png/buttons/tournaments page - enter/desktopDefault.png";
import desktopHover from "../../assets/png/buttons/tournaments page - enter/desktopHover.png";
import desktopClick from "../../assets/png/buttons/tournaments page - enter/desktopClick.png";

export const TournamentsPage = () => {
    const matchDesktop = useMediaQuery(`(min-width:${desktopBreakPoint}px)`);
    const navigate = useNavigate();

    const cards = [
        {
            title: "Tournament 1",
            items: [
                {title: "Enter price", value: "3 $DNA "},
                {title: "Price pool", value: "10 $DNA "},
                {title: "Participant", value: "5/500"},
            ],
            onClick: () => {
                matchDesktop ? navigate("/app2/tournament") : navigate("/app2/error")
            }
        },
        // {
        //     title: "Tournament 2",
        //     items: [
        //         {title: "Enter price", value: "3 $DNA "},
        //         {title: "Price pool", value: "10 $DNA "},
        //         {title: "Participant", value: "5/500"},
        //     ],
        //     onClick: () => {
        //         matchDesktop ? navigate("/app2/tournament") : navigate("/app2/error")
        //     }
        // },
    ];

    const dispatch = useAppDispatch();
    const onLeaderboard = () => {
        dispatch(setModal(true));
        dispatch(setLeaderboardModal(true));
    }

    return (
        <div className={style.tournamentsPage}>
            <div className={style.inner}>

                <div className={style.titleBlock}>
                    <h2 className={style.title}>Tournaments</h2>

                    <ButtonCustom className={style.leaderboardBtn}
                                  onClick={onLeaderboard}
                                  widthMobile={287}
                                  heightMobile={75}
                                  widthDesktop={360}
                                  heightDesktop={75}
                                  imgMobileDefault={imgMobileDefault}
                                  imgMobileClick={imgMobileClick}
                                  imgDesktopDefault={imgDesktopDefault}
                                  imgDesktopHover={imgDesktopHover}
                                  imgDesktopClick={imgDesktopClick}
                    >
                        <p>Leaderboard</p>
                    </ButtonCustom>

                </div>

                <div className={style.cards}>
                    {
                        cards.map((card, index) => (
                            <CardItem key={index}>
                                <>
                                    <p className={style.title}>{card.title}</p>
                                    <div className={style.items}>
                                        {
                                            card.items.map(({title, value}, index) => (
                                                <div className={style.item} key={index}>
                                                    <p className={style.title}>{title}</p>
                                                    <p className={style.value}>{value}</p>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <ButtonCustom className={style.enterBtn}
                                                  onClick={card.onClick}
                                                  widthMobile={240}
                                                  heightMobile={40}
                                                  widthDesktop={294}
                                                  heightDesktop={40}
                                                  imgMobileDefault={mobileDefault}
                                                  imgMobileClick={mobileClick}
                                                  imgDesktopDefault={desktopDefault}
                                                  imgDesktopHover={desktopHover}
                                                  imgDesktopClick={desktopClick}
                                    >
                                        <p>enter</p>
                                    </ButtonCustom>

                                </>
                            </CardItem>

                        ))
                    }
                    <CardItem>
                        <>
                            <p className={style.title}>Tournament 2</p>
                            <p className={style.soon}>soon</p>
                            <img className={style.sandTimer} src={sandTimerIcon} alt=""/>

                        </>
                    </CardItem>
                    <CardItem>
                        <>
                            <p className={style.title}>Tournament 3</p>
                            <p className={style.soon}>soon</p>
                            <img className={style.sandTimer} src={sandTimerIcon} alt=""/>
                        </>
                    </CardItem>
                </div>

            </div>
        </div>
    )
}