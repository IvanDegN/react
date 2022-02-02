import './NavBar.module.css';
import NavBarCssModule from './NavBar.module.css'

const NavBar = () =>
{
    return (
        <nav className={NavBarCssModule.nav}>
            <ul>
                <li className={NavBarCssModule.item}><a className={`${NavBarCssModule.link} ${NavBarCssModule.active}`} href='/profile'>Profile</a></li>
                <li className={NavBarCssModule.item}><a className={NavBarCssModule.link} href='/messages'>Messages</a></li>
                <li className={NavBarCssModule.item}><a className={NavBarCssModule.link} href='/news'>News</a></li>
                <li className={NavBarCssModule.item}><a className={NavBarCssModule.link} href='/music'>Music</a></li>
                <br />
                <br />
                <li className={NavBarCssModule.item}><a className={NavBarCssModule.link} href='/settings'>Settings</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;