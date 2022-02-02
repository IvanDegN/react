import './NavBar.module.css';
import NavBarCssModule from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () =>
{
    return (
        <nav className={NavBarCssModule.nav}>
            <ul>
                <li className={NavBarCssModule.item}><NavLink className={({isActive}) => isActive ? NavBarCssModule.active : NavBarCssModule.link} to='/profile'>Profile</NavLink></li>
                <li className={NavBarCssModule.item}><NavLink className={({isActive}) => isActive ? NavBarCssModule.active : NavBarCssModule.link} to='/messages'>Messages</NavLink></li>
                <li className={NavBarCssModule.item}><NavLink className={({isActive}) => isActive ? NavBarCssModule.active : NavBarCssModule.link}  to='/news'>News</NavLink></li>
                <li className={NavBarCssModule.item}><NavLink className={({isActive}) => isActive ? NavBarCssModule.active : NavBarCssModule.link} to='/music'>Music</NavLink></li>
                <br />
                <br />
                <li className={NavBarCssModule.item}><NavLink className={({isActive}) => isActive ? NavBarCssModule.active : NavBarCssModule.link} to='/settings'>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;