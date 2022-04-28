import * as React from "react";
import style from "./PlayPage.module.scss";
import btn from "../../assets/png/buttons/play/button.png";
import {useState} from "react";
import clsx from "clsx";
import numberButton from "../../assets/png/buttons/numberButton.png";
import {chatItems, leaderboardCards, playPageTabs, TabEnum} from "./constants";
import {useFormik} from "formik";
import buttonBack from "../../assets/png/buttons/numberButton.png";
import {useAppDispatch} from "../../store/hooks";
import {setGameplayModal, setModal, setTimeLeftModal} from "../../store/appSlice";

import fieldBack from "../../assets/png/cards/play page/field.png";
import asideBack from "../../assets/png/cards/play page/aside.png";
import leaderboardCard from "../../assets/png/cards/play page/leaderboard card.png";
import chatCard from "../../assets/png/cards/play page/chat card.png";
import formBack from "../../assets/png/cards/play page/form.png";
import sendIcon from "../../assets/png/icons/send.png";

interface IValues {
    message: string
}

export const PlayPage = () => {
    const [currentTab, setCurrentTab] = useState<TabEnum>(TabEnum.leaderboard);

    const initialValues: IValues = {
        message: "",
    }

    const onSubmit = (values: IValues) => {
        console.log(values.message)
    }

    const formik = useFormik({
        initialValues,
        onSubmit
    });

    const dispatch = useAppDispatch();
    const onClickHandler = () => {
        dispatch(setModal(true));
        dispatch(setTimeLeftModal(true))
    };

    return (
        <div className={style.playPage}>
            <div className={style.inner}>

                <div className={style.left}>
                    <div className={style.field}
                         onClick={onClickHandler}
                    >
                        <img className={style.fieldBack}
                             src={fieldBack}
                             alt=""
                        />

                        <iframe frameBorder={0}
                            //src="http://www.youtube.com/embed/xDMP3i36naA"
                                className={style.frame}
                        />
                    </div>
                    <button className={style.playBtn}>
                        <img src={btn} alt=""/>
                        <p>play</p>
                    </button>
                </div>

                <aside className={style.aside}>

                    <img className={style.asideBack}
                         src={asideBack}
                         alt=""
                    />

                    <div className={style.content}>
                        <div className={style.tabs}>
                            {
                                playPageTabs.map((tab, index) => (
                                    <button key={index}
                                            className={clsx({
                                                [style.tab]: true,
                                                [style.tab_current]: tab === currentTab,
                                            })}
                                            onClick={() => setCurrentTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))
                            }

                        </div>

                        {
                            currentTab === TabEnum.leaderboard && (
                                <>
                                    <div className={style.leaderboard}>
                                        {
                                            leaderboardCards.map(({address, score}, index) => (
                                                <div className={style.leaderboardCard} key={index}>

                                                    <img className={style.leaderboardCardBack}
                                                         src={leaderboardCard}
                                                         alt=""/>

                                                    <div className={style.leaderboardCardContent}>
                                                        <button onClick={() => {
                                                            dispatch(setModal(true));
                                                            dispatch(setGameplayModal(true))
                                                        }}
                                                        >
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
                            currentTab === TabEnum.chat && (
                                <>
                                    <div className={style.chat}>
                                        {
                                            chatItems.map(({nickname, message}, index) => (
                                                <div key={index}
                                                     className={style.chatItem}
                                                >
                                                    <img className={style.chatItemBack}
                                                        src={chatCard}
                                                        alt=""
                                                    />


                                                    <p className={style.nickname}>{nickname}</p>
                                                    <p className={style.message}>{message}</p>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <form className={style.form}
                                          onSubmit={formik.handleSubmit}
                                    >

                                        <img className={style.formBack}
                                             src={formBack}
                                             alt=""
                                        />

                                        <div className={style.chatFormContent}>
                                            <input type="text"
                                                   placeholder="Write message"
                                                   {...formik.getFieldProps('message')}
                                            />
                                            <button type="submit">
                                                <img src={buttonBack} alt=""/>
                                                <img src={sendIcon} alt=""/>
                                            </button>
                                        </div>
                                    </form>

                                    <div className={style.chatBlur}/>
                                </>
                            )
                        }


                    </div>
                </aside>
            </div>
        </div>
    )
}