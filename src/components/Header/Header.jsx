import './Header.module.css';
import HeaderModuleCss from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>
{
    return (

        <header className={HeaderModuleCss.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='logo'/>

            <div className={HeaderModuleCss.headerBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}> Login </NavLink>   }

            </div>
        </header>
    );
}

export  default Header;