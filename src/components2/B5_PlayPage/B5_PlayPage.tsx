import * as React from "react";
import style from "./PlayPage.module.scss";
import {svgIcons} from "../../assets/svg/svgIcons";
import btn from "../../assets/png/buttons/play/button.png";
import {useState} from "react";
import clsx from "clsx";
import numberButton from "../../assets/png/buttons/numberButton.png";

const tabs = [
    "Leaderboard",
    "chat"
];

const leaderboardCards = [
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
    {address: "0xD31...9c2b", score: 12345},
];


export const PlayPage = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div className={style.playPage}>
            <div className={style.inner}>

                <div className={style.left}>
                    <div className={style.field}>
                        <div className={style.fieldIcon}>{svgIcons.playPageField}</div>
                    </div>
                    <button className={style.playBtn}>
                        <img src={btn} alt=""/>
                        <p>play</p>
                    </button>
                </div>

                <aside className={style.aside}>
                    <div className={style.back}>{svgIcons.playPageAside}</div>
                    <div className={style.content}>
                        <div className={style.tabs}>
                            {
                                tabs.map((tab, index) => (
                                    <button key={index}
                                            className={clsx({
                                                [style.tab]: true,
                                                [style.tab_current]: index === currentTab,
                                            })}
                                            onClick={() => setCurrentTab(index)}
                                    >
                                        {tab}
                                    </button>
                                ))
                            }

                        </div>

                        {
                            currentTab === 0 && (
                                <>
                                    <div className={style.leaderboard}>
                                        {
                                            leaderboardCards.map(({address, score}, index) => (
                                                <div className={style.leaderboardCard} key={index}>
                                                    <div className={style.back}>{svgIcons.leaderboardCard}</div>
                                                    <div className={style.leaderboardCardContent}>
                                                        <button>
                                                            <img src={numberButton} alt=""/>
                                                            <p>{index + 1}</p>
                                                        </button>

                                                        <div className={style.info}>
                                                            <p>address</p>
                                                            <p>{`score: ${score}`}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className={style.blur}/>
                                </>
                            )
                        }

                        {
                            currentTab === 1 && (
                                <div className={style.chat}>
                                    chat
                                </div>
                            )
                        }


                    </div>
                </aside>
            </div>
        </div>
    )
}