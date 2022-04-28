import style from "./MarketplacePage.module.scss";
import * as React from "react";
import {cards} from "./constants";
import useMediaQuery from "@mui/material/useMediaQuery";
import {desktopBreakPoint} from "../../constants";
import clsx from "clsx";
import btnMobile from "../../assets/png/buttons/marketplace purchase/mobile.png";
import btnDesktop from "../../assets/png/buttons/marketplace purchase/desktop.png";

import cardMobile from "../../assets/png/cards/marketplace page/mobile.png";
import cardDesktop from "../../assets/png/cards/marketplace page/desktop.png";

export const MarketplacePage = () => {
    const matchDesktop = useMediaQuery(`(min-width:${desktopBreakPoint}px)`);

    return (
        <div className={style.marketplacePage}>
            <div className={style.inner}>
                <h2 className={style.title}>Whitelist Marketplace</h2>

                <div className={style.cards}>
                    {
                        cards.map(({img, name, price, left}, index) => (
                            <div key={index}
                                 className={style.card}
                            >

                                <img className={style.back}
                                     src={matchDesktop ? cardDesktop : cardMobile}
                                     alt=""
                                />

                                <div className={style.cardContent}>

                                    <img src={img} alt="" className={style.avatar}/>

                                    <p className={style.name}>{name}</p>

                                    <div className={clsx(style.row, style.row_first)}>
                                        <p>Price</p>
                                        <p>{`${price} $DNA`}</p>
                                    </div>

                                    <div className={clsx(style.row, style.row_second)}>
                                        <p>Left</p>
                                        <p>{left}</p>
                                    </div>

                                    <button className={style.purchaseBtn}>
                                        <img src={matchDesktop ? btnDesktop : btnMobile} alt=""/>
                                        <p>purchase</p>
                                    </button>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}