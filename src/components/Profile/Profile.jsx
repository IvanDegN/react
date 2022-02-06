import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) =>
{
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}  AddPost={props.AddPost} newPostText={props.newPostText} UpdateNewPostText={props.UpdateNewPostText}/>
        </div>
    );
}

export default Profile;