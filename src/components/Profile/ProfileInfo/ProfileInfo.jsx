import ProfileModuleCss from "../Profile.module.css";


const ProfileInfo = () =>
{
    return (
        <div>
            <div className='bcg-wrapper'>
                <img className={ProfileModuleCss.image_full} alt='bcg' src='https://freefrontend.com/assets/img/css-background-patterns/simple-pattern-with-css3.png' />
            </div>
            <div className={ProfileModuleCss.avatar}>
                ava
            </div>
        </div>

    );
}

export default ProfileInfo;