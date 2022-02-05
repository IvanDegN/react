import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {AddPost} from "./redux/state";


export const Rerender = (state) =>
{
    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>
                <App users={state.messagesPage.users}
                     messages={state.messagesPage.messages}
                     posts={state.profilePage.posts}
                     friends={state.SideBar.names}
                     AddPost={AddPost}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
