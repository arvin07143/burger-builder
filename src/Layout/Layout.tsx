import React, { ReactNode, useState } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import classes from './Layout.module.css'

type LayoutProps = {
    children?:ReactNode
}

const Layout = (props:LayoutProps) => {
    
    const [showSideDrawer,toggleShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () =>{
        toggleShowSideDrawer(false)
    }

    const sideDrawerToggleHandler = () =>{
        toggleShowSideDrawer(!showSideDrawer)
    }
    
    return(
    <div className={classes.Content}>
        <Toolbar click={sideDrawerToggleHandler}/>
        <SideDrawer clicked={sideDrawerClosedHandler} show={showSideDrawer}/>
        <main style={{height:"100%"}}>
            {props.children}
        </main>
    </div>
);
    }

export default Layout;