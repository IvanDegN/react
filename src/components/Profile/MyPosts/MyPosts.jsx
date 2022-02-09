import MyPostsModuleCss from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";




const MyPosts = (props) =>
{


    let posts = props.posts.map((post,key) => <Post  key={key} text={post.text} likes = {post.likes}  posts={props.posts} newPostText={props.newPostText} />)
    let NewPost = props.newPostText

    const post = React.createRef();

    const addPost = () =>
    {
        props.addPost();
    }

    const updateNewPostText = () =>
    {
        let text = post.current.value;
        props.updateNewPostText(text);

    }



    return (
        <div className={MyPostsModuleCss.PostsWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={updateNewPostText} ref={post} value={NewPost} placeholder='post something...'/>
                </div>
                <div>
                    <button  onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className='New__post'>
                New post
            </div>
            <div className={MyPostsModuleCss.Posts}>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;