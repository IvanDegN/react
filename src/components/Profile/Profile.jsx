import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


const Profile = (props) =>
{

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}  />
        </div>
    );
}

export default Profile;