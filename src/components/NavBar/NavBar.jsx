import './NavBar.module.css';
import NavBarCssModule from './NavBar.module.css'
import {NavLink} from "react-router-dom";






const NavBar = (props) =>
{
    return (
        <nav className={NavBarCssModule.nav}>
            <ul>
                <li className={NavBarCssModule.item}><NavLink className={({isActive}) => isActive ? NavBarCssModule.active : NavBarCssModule.link} to='/profile'>Profile</NavLink></li>
                <li className={NavBarCssModule.item}><NavLink className={({isActive}) => isActive ? NavBarCssModule.active : NavBarCssModule.link} to='/messages'>Messages</NavLink></li>
                <li className={NavBarCssModule.item}><NavLink className={({isActive}) => isActive ? NavBarCssModule.active : NavBarCssModule.link}  to='/news'>News</NavLink></li>
                <li className={NavBarCssModule.item}><NavLink className={({isActive}) => isActive ? NavBarCssModule.active : NavBarCssModule.link} to='/music'>Music</NavLink></li>
                <li className={NavBarCssModule.item}><NavLink className={({isActive}) => isActive ? NavBarCssModule.active : NavBarCssModule.link} to='/users'>Users</NavLink></li>
                <br />
                <br />
                <li className={NavBarCssModule.item}><NavLink className={({isActive}) => isActive ? NavBarCssModule.active : NavBarCssModule.link} to='/settings'>Settings</NavLink></li>
                <br />
                <br />
            </ul>
            <div>
                <div className={NavBarCssModule.FriendTitle}>Friends</div>
                <div className={NavBarCssModule.friendWrapper}>
                    {props.friends}
                </div>
            </div>

        </nav>
    );
}

export default NavBar;