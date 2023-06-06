import burgerLogo from '../assets/images/27.1 burger-logo.png';
import classes from '../Logo/Logo.module.css'

const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='MyBurger'/>
    </div>
);

export default logo;