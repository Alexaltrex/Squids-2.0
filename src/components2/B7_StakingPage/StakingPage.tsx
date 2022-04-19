import * as React from "react";
import style from "./StakingPage.module.scss";
import {svgIcons} from "../../assets/svg/svgIcons";
import nftGif from "../../assets/gif/stacking.gif";
import btn from "../../assets/png/buttons/staking page button/desktop.png";


export const StakingPage = () => {
    const stakedCount = 3;

    const nfts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


    return (
        <div className={style.stakingPage}>
            <div className={style.inner}>
                <div className={style.titleBlock}>
                    <h2 className={style.title}>Staking:</h2>
                    <p className={style.count}>{`${stakedCount} staked`}</p>
                </div>

                <div className={style.cards}>
                    {
                        nfts.map(nft => (
                            <div key={nft}
                                 className={style.card}
                            >
                                <div className={style.back}>{svgIcons.stackingPageCardBack}</div>
                                <div className={style.content}>
                                    <img src={nftGif} alt=""/>
                                    <div className={style.buttons}>
                                        <button>
                                            <img src={btn} alt=""/>
                                            <p>Stake</p>
                                        </button>
                                        <button>
                                            <img src={btn} alt=""/>
                                            <p>Unstake</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}