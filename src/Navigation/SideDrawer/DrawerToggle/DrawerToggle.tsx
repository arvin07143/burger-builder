import classes from './DrawerToggle.module.css'

type DrawerToggleProps = {
    click : Function
}
const drawerToggle = (props:DrawerToggleProps) => (
    <div className={classes.DrawerToggle} onClick={()=>props.click()}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;