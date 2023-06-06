import React, { ReactNode } from "react";
import classes from './Modal.module.css'
import Backdrop from "../../Backdrop/Backdrop";

type ModalProps = {
    show: boolean
    children?: ReactNode
    closed:Function
}

const modal = (props: ModalProps) => (
    <div>
        <Backdrop show={props.show} clicked={props.closed} />
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </div>
);


export default modal