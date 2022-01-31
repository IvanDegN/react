import PostModuleCss from './Post.module.css'

const Post = (posts) =>
{
    return (
        <div className={PostModuleCss.Post__item}>
            <img src='https://avatarfiles.alphacoders.com/205/thumb-1920-205779.png' alt='avatar' />
            {posts.text}
            <div>likes quantity: {posts.likes} </div>

        </div>
    );
}

export default Post;