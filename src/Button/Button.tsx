import React, { ReactNode } from "react";
import classes from './Button.module.css'

type ButtonProp = {
    click: Function
    btnType: string
    children: ReactNode
}

const button = (props: ButtonProp) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={() => props.click()}>
        {props.children}
    </button>
);

export default button;