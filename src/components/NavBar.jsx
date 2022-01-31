import './NavBar.module.css';
import NavBarCssModule from './NavBar.module.css'

const NavBar = () =>
{
    return (
        <nav className={NavBarCssModule.nav}>
            <ul>
                <li className={NavBarCssModule.item}><a className={`${NavBarCssModule.link} ${NavBarCssModule.active}`} href='#'>Profile</a></li>
                <li className={NavBarCssModule.item}><a className={NavBarCssModule.link} href='#'>Messages</a></li>
                <li className={NavBarCssModule.item}><a className={NavBarCssModule.link} href='#'>News</a></li>
                <li className={NavBarCssModule.item}><a className={NavBarCssModule.link} href='#'>Music</a></li>
                <br />
                <br />
                <li className={NavBarCssModule.item}><a className={NavBarCssModule.link} href='#'>Settings</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;