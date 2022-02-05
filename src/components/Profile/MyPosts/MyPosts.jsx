import MyPostsModuleCss from './MyPosts.module.css';
import React from "react";

const MyPosts = (props) =>
{

    const AddPost = () =>
    {
        let text = post.current.value;
        props.AddPost(text)
        props.current.value = '';
    }
    const post = React.createRef();

    return (
        <div className={MyPostsModuleCss.PostsWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={post}></textarea>
                </div>
                <div>
                    <button  onClick={ AddPost }>Add post</button>
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