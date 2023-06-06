import React from "react";
import classes from './Toolbar.module.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

type ToolBarProps = {
    click : Function
}

const toolbar = (props:ToolBarProps) => (
    <header className={classes.Toolbar}>
        <DrawerToggle click={props.click} />
        <div className={classes.Logo}>
        <Logo></Logo>
        </div>
        
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;