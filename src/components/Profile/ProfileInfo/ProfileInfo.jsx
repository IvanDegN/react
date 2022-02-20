import ProfileModuleCss from "../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) =>
{
    if(!props.profile)
    {
        return <Preloader/>
    }

    return (
        <div>
            <div className='bcg-wrapper'>
                <img className={ProfileModuleCss.image_full} alt='bcg' src='https://freefrontend.com/assets/img/css-background-patterns/simple-pattern-with-css3.png' />
            </div>
            <div className={ProfileModuleCss.avatar}>
                <img src={props.profile.photos.large} alt='ava' />
                ava
            </div>
        </div>

    );
}

export default ProfileInfo;