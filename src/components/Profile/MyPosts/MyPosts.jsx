import MyPostsModuleCss from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () =>
{
    return (
        <div className={MyPostsModuleCss.PostsWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className='New__post'>
                New post
            </div>
            <div className={MyPostsModuleCss.Posts}>
                <Post text='Hi' likes = '20'  />
                <Post text='Where are you from?' likes = '15' />
            </div>

        </div>
    );
}

export default MyPosts;