import React, { ReactNode } from "react";
import classes from './Modal.module.css'

type ModalProps = {
    show:boolean
    children?:ReactNode
}

const modal = (props:ModalProps)=> (
    <div className={classes.Modal}
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity:props.show ? '1' : '0'
    }}>
        {props.children}
    </div>
);


export default modal