import MyPostsModuleCss from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () =>
{

    let PostsData =
        [
            {id: 1, text: 'Hi', likes: 20},
            {id: 2, text: 'Where are you from?', likes: 15}
        ]

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
                <Post text={PostsData[0].text} likes = {PostsData[0].likes}  />
                <Post text={PostsData[1].text}  likes = {PostsData[1].likes} />
            </div>

        </div>
    );
}

export default MyPosts;