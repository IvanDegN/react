

import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";



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
                     newMessageText={state.messagesPage.newMessageText}
                     store={store}
                     state={state}

                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
Rerender(store.getState());
store.subscribe(() =>
{
    let state = store.getState();
    Rerender(state);
});