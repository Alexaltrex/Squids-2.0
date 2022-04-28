import * as React from "react";
import style from "./VoteModalCard.module.scss";
import {FC, useState} from "react";
import {svgIcons} from "../../../../../assets/svg/svgIcons";
import {Rating} from "@mui/material";
import {IVoteModalCard} from "../VoteModal";
import btn from "../../../../../assets/png/buttons/vote modal card/desktop.png";

import cardDefault from "../../../../../assets/png/cards/vote modal/default.png";
import cardHover from "../../../../../assets/png/cards/vote modal/hover.png";
import cardClick from "../../../../../assets/png/cards/vote modal/click.png";
import voteModalCardIcon from "../../../../../assets/png/icons/vote modal card icon.png";

export const VoteModalCard: FC<IVoteModalCard> = ({
                                                      gameName,
                                                      rating,
                                                      votesCount,
                                                  }) => {

    const [value, setValue] = useState<number | null>(rating);

    const [hover, setHover] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    const onChangeHandler = (event: React.SyntheticEvent, value: number | null) => {
        setValue(value);
    }

    return (
        <div className={style.voteModalCard}
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             onMouseDown={() => setMouseDown(true)}
             onMouseUp={() => setMouseDown(false)}
        >

            <img className={style.back}
                 src={
                     mouseDown
                         ? cardClick
                         : hover
                         ? cardHover
                         : cardDefault
                 }
                 alt=""
            />

            <div className={style.content}>
                <Rating max={3}
                        value={value}
                        onChange={onChangeHandler}
                        emptyIcon={svgIcons.ratingIconEmpty}
                        icon={svgIcons.ratingIconFull}
                        className={style.rating}
                />

                <img className={style.icon}
                     src={voteModalCardIcon}
                     alt=""
                />

                <p className={style.gameName}>{gameName}</p>

                <button className={style.voteButton}>
                    <img src={btn} alt=""/>
                    <p>vote</p>
                </button>

                <p className={style.votesCount}>{`${votesCount} votes`}</p>
            </div>


        </div>
    )
}