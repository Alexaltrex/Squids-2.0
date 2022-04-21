import * as React from "react";
import style from "./LootBoxPage.module.scss";
import {useAppSelector} from "../../store/hooks";
import {selectLootBox} from "../../store/appSlice";
import useMediaQuery from "@mui/material/useMediaQuery";
import {svgIcons} from "../../assets/svg/svgIcons";
import btnMobile from "../../assets/png/buttons/loot box open/mobile.png";
import btnDesktop from "../../assets/png/buttons/loot box open/desktop.png";

export const LootBoxPage = () => {
    const lootBox = useAppSelector(selectLootBox);
    const matchDesktop = useMediaQuery('(min-width:1440px)');

    return (
        <div className={style.lootBoxPage}>
            <div className={style.inner}>
                {
                    lootBox && (
                        <>
                            <h2 className={style.title}>{`${lootBox.label} Box`}</h2>

                            <div className={style.card}>
                                <div className={style.back}>
                                    {
                                        matchDesktop
                                            ? svgIcons.lootBoxPageCardDesktop
                                            : svgIcons.lootBoxPageCardMobile
                                    }
                                </div>
                                <div className={style.content}>
                                    <div className={style.icon}>{svgIcons.lootBoxesCardIcon}</div>
                                    <div className={style.infoBlock}>

                                        <div className={style.qualityBox}>
                                            <p>Quality left</p>
                                            <p>{lootBox.quality}</p>
                                        </div>

                                        <p className={style.contain}>What can the box contain:</p>

                                        <div className={style.items}>
                                            {
                                                lootBox.contain.map((item, index) => (
                                                    <div className={style.item}>
                                                        <img src={item.icon} alt=""/>
                                                        <p>{`${item.name} ${item.percent}%`}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        <button className={style.openBtn}>
                                            <img src={matchDesktop ? btnDesktop : btnMobile} alt=""/>
                                            <p>open</p>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </>
                    )

                }
            </div>
        </div>
    )
}