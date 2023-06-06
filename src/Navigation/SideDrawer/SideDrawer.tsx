import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.module.css'
import Backdrop from "../../Backdrop/Backdrop";

type SideDrawerProps = {
    clicked : Function
    show: boolean
}

const sideDrawer = (props:SideDrawerProps) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.show){
        attachedClasses = [classes.SideDrawer,classes.Open]
    }

    return (
        <div>
        <Backdrop show={props.show} clicked={props.clicked}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </div>

    );
};

export default sideDrawer;