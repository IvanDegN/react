import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>
{
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}  AddPost={props.AddPost}/>
        </div>
    );
}

export default Profile;