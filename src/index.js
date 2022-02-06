

import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import store from "./redux/state";


 const Rerender = (state) =>
{
    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>
                <App users={state.messagesPage.users}
                     messages={state.messagesPage.messages}
                     posts={state.profilePage.posts}
                     friends={state.SideBar.names}
                     dispatch={store.dispatch.bind(store)}
                     newPostText={state.profilePage.newPostText}
                     /*UpdateNewPostText={store.dispatch.bind(store)}*/
                     newMessageText={state.messagesPage.newMessageText}
                     /*AddMessage={store.dispatch.bind(store)}
                     UpdateNewMessageText={store.dispatch.bind(store)}*/
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
Rerender(store.getState());
store.subscribe(Rerender);