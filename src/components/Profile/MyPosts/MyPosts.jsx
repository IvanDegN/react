import MyPostsModuleCss from './MyPosts.module.css';
import React from "react";


const MyPosts = (props) =>
{

    const post = React.createRef();

    const AddPost = () =>
    {
        props.AddPost();
    }

    const UpdateNewPostText = () =>
    {
        let text = post.current.value;
        props.UpdateNewPostText(text);
    }



    return (
        <div className={MyPostsModuleCss.PostsWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={UpdateNewPostText} ref={post} value={props.newPostText}/>
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