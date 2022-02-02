import './Profile.module.css';
import ProfileModuleCss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>
{
    return (
        <div>
            <div className='bcg-wrapper'>
                <img className={ProfileModuleCss.image_full} alt='bcg' src='https://freefrontend.com/assets/img/css-background-patterns/simple-pattern-with-css3.png' />
            </div>
            <div className='avatar'>
                ava
            </div>
            <MyPosts />

        </div>
    );
}

export default Profile;