import ProfileModuleCss from "../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) =>
{
    if(!props.profile)
    {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div className='bcg-wrapper'>*/}
            {/*    <img className={ProfileModuleCss.image_full} alt='bcg' src='https://freefrontend.com/assets/img/css-background-patterns/simple-pattern-with-css3.png' />*/}
            {/*</div>*/}
            <div className={ProfileModuleCss.avatar}>
                {/*<img src={props.profile.photos.large} alt='ava' />*/}
                {/*<div>Имя: {props.profile.fullName}</div>*/}
                {/*<div>Обо мне: {props.profile.aboutMe}</div>*/}
                {/*<div>Мой вк: {props.profile.contacts.vk}</div>*/}
                {/*<div>Ищу ли я работу: {props.profile.lookingForAJobDescription}</div>*/}
                {/*ava*/}
                <ProfileStatus status={'Hello'}/>
            </div>
        </div>

    );
}

export default ProfileInfo;