
import state, {subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {AddMessage, AddPost, UpdateNewMessageText, UpdateNewPostText} from "./redux/state";


 const Rerender = (state) =>
{
    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>
                <App users={state.messagesPage.users}
                     messages={state.messagesPage.messages}
                     posts={state.profilePage.posts}
                     friends={state.SideBar.names}
                     AddPost={AddPost}
                     newPostText={state.profilePage.newPostText}
                     UpdateNewPostText={UpdateNewPostText}
                     newMessageText={state.messagesPage.newMessageText}
                     AddMessage={AddMessage}
                     UpdateNewMessageText={UpdateNewMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
Rerender(state);
subscribe(Rerender);