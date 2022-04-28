import * as React from "react";
import style from "./LootBoxPage.module.scss";
import {useAppSelector} from "../../store/hooks";
import {selectLootBox} from "../../store/appSlice";
import useMediaQuery from "@mui/material/useMediaQuery";
import btnMobile from "../../assets/png/buttons/loot box open/mobile.png";
import btnDesktop from "../../assets/png/buttons/loot box open/desktop.png";
import {desktopBreakPoint} from "../../constants";

import cardMobile from "../../assets/png/cards/loot box page/mobile.png";
import cardDesktop from "../../assets/png/cards/loot box page/desktop.png";
import lootBoxIcon from "../../assets/png/icons/loot boxes page card icon.png"

export const LootBoxPage = () => {
    const lootBox = useAppSelector(selectLootBox);
    const matchDesktop = useMediaQuery(`(min-width:${desktopBreakPoint}px)`);

    return (
        <div className={style.lootBoxPage}>
            <div className={style.inner}>
                {
                    lootBox && (
                        <>
                            <h2 className={style.title}>{`${lootBox.label} Box`}</h2>

                            <div className={style.card}>

                                <img className={style.back}
                                     src={matchDesktop ? cardDesktop : cardMobile}
                                     alt=""
                                />

                                <div className={style.content}>

                                    <img className={style.icon} src={lootBoxIcon} alt=""/>

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