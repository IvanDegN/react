import MyPostsModuleCss from './MyPosts.module.css';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";




const MyPosts = (props) =>
{

    const post = React.createRef();

    const AddPost = () =>
    {

        props.dispatch(addPostActionCreator());
    }

    const UpdateNewPostText = () =>
    {
        let text = post.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }



    return (
        <div className={MyPostsModuleCss.PostsWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={UpdateNewPostText} ref={post} value={props.newPostText} placeholder='post something...'/>
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