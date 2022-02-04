import MyPostsModuleCss from './MyPosts.module.css';


const MyPosts = (props) =>
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
                {props.posts}
            </div>
        </div>
    );
}

export default MyPosts;