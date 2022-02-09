
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import StoreContext from "../../../../StoreContext";




const MyPostsContainer = (props) =>
{






    return (

        <StoreContext.Consumer>
        {
            (store) =>
            {
                const addPost = () =>
                {

                    store.dispatch(addPostActionCreator());
                }

                const updateNewPostText = (text) =>
                {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                let state = store.getState();
               return <MyPosts updateNewPostText={updateNewPostText} addPost={addPost} posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>

    );

}

export default MyPostsContainer;