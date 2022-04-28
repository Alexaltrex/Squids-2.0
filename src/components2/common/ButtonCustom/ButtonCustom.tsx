import {FC, useState} from "react";
import * as React from "react";
import style from "./ButtonCustom.module.scss"
import clsx from "clsx";

interface IButtonCustom extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    width: number
    height: number
    className?: string
    imgDefault: string
    imgHover: string
    imgClick: string
}

export const ButtonCustom: FC<IButtonCustom> = ({
                                                    width,
                                                    height,
                                                    className,
                                                    imgDefault,
                                                    imgHover,
                                                    imgClick,
                                                    ...props
                                                }) => {
    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);

    return (
        <button className={clsx(style.buttonCustom, Boolean(className) && className)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onMouseDown={() => setClick(true)}
                onMouseUp={() => setClick(false)}
                {...props}
        >
            <img src={click ? imgClick : hover ? imgHover : imgDefault}
                 alt=""
                 style={{width, height}}
            />
        </button>
    )
}