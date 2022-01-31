import './Profile.module.css';
import ProfileModuleCss from './Profile.module.css';

const Profile = () =>
{
    return (
        <div className='content'>
            <div className='bcg-wrapper'>
                <img className={ProfileModuleCss.image_full} alt='bcg' src='https://freefrontend.com/assets/img/css-background-patterns/simple-pattern-with-css3.png' />
            </div>
            <div className='avatar'>
                ava
            </div>
            <div className='Posts'>
                My posts
                <div className='New__post'>
                    New post
                </div>
                <div className='Posts__wrapper'>
                    <div className='Post__item'>
                        post 1
                    </div>
                    <div className='Post__item'>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;