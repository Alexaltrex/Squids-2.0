import * as React from "react";
import style from "./StakingPage.module.scss";
import {svgIcons} from "../../assets/svg/svgIcons";
import nftGif from "../../assets/gif/stacking.gif";
import btn from "../../assets/png/buttons/staking page button/desktop.png";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";

import imgDefault from "../../assets/png/buttons/staking page button/default.png";
import imgHover from "../../assets/png/buttons/staking page button/hover.png";
import imgClick from "../../assets/png/buttons/staking page button/click.png";

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
                                    <img src={nftGif} alt="" className={style.nftGif}/>

                                    <div className={style.buttons}>

                                        <ButtonCustom className={style.btnStaking}
                                                      widthMobile={139}
                                                      heightMobile={40}
                                                      widthDesktop={139}
                                                      heightDesktop={40}
                                                      imgMobileDefault={imgDefault}
                                                      imgMobileClick={imgClick}
                                                      imgDesktopDefault={imgDefault}
                                                      imgDesktopHover={imgHover}
                                                      imgDesktopClick={imgClick}
                                        >
                                            <p>Stake</p>
                                        </ButtonCustom>

                                        <ButtonCustom className={style.btnStaking}
                                                      widthMobile={139}
                                                      heightMobile={40}
                                                      widthDesktop={139}
                                                      heightDesktop={40}
                                                      imgMobileDefault={imgDefault}
                                                      imgMobileClick={imgClick}
                                                      imgDesktopDefault={imgDefault}
                                                      imgDesktopHover={imgHover}
                                                      imgDesktopClick={imgClick}
                                        >
                                            <p>Unstake</p>
                                        </ButtonCustom>

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