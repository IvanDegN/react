import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers
(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        SideBar: sidebarReducer,
        UsersPage: usersReducer
    }
)

let store = createStore(reducers);

window.store = store;

export default store;