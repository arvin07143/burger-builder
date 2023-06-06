import { ReactNode } from 'react';
import classes from './NavigationItem.module.css'

type NavigationItemProp = {
    link:string
    active:boolean
    children?: ReactNode;
}

const navigationItem = (props:NavigationItemProp) => (
    <li className={classes.NavigationItem}>
        <a  href={props.link} 
            className={props.active ? classes.active : undefined}>{props.children}</a>
    </li>
);

export default navigationItem;