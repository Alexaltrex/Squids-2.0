import style from "./MyBoxes.module.scss"
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import openMobile from "../../../assets/png/buttons/loot boxes - open/mobile.png";
import openDesktop from "../../../assets/png/buttons/loot boxes - open/desktop.png";
import {boxes} from "../constants";
import {useAppDispatch} from "../../../store/hooks";
import { setLootBox } from "../../../store/appSlice";
import {useNavigate} from "react-router-dom";

export const MyBoxes = () => {
    const matchDesktop = useMediaQuery('(min-width:1440px)');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div className={style.myBoxes}>

            <h3 className={style.title}>My  boxes</h3>

            <div className={style.boxes}>
                {
                    boxes.map(({label, quality}, index) => (
                        <div className={style.box} key={index}>
                            <div className={style.top}>
                                <p className={style.label}>{label}</p>
                                <p className={style.value}>{quality}</p>
                            </div>
                            <button className={style.openBtn}
                                    onClick={() => {
                                        navigate('/app2/box')
                                        dispatch(setLootBox(boxes[index]));
                                    }}
                            >
                                <img src={matchDesktop ? openDesktop : openMobile}
                                     alt=""
                                     className={style.back}
                                />
                                <p>open</p>
                            </button>
                        </div>
                    ))
                }
            </div>

            <div className={style.cards}>

            </div>


        </div>
    )
}