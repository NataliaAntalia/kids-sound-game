import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    title: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export const Button = (props: ButtonType) => {
    return (

        <button className={s.button} onClick={props.onClick} style={{width: 160}}>{props.title}</button>

    );
};
