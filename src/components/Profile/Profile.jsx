import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) =>
{
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}  dispatch={props.dispatch} newPostText={props.newPostText} />
        </div>
    );
}

export default Profile;