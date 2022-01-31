import MyPostsModuleCss from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () =>
{
    return (
        <div className='Posts'>
            My posts
            <div className='New__post'>
                New post
            </div>
            <Post text='Hi' likes = '20'  />
            <Post text='Where are you from?' likes = '15' />


        </div>
    );
}

export default MyPosts;