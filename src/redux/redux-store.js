import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers
(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        SideBar: sidebarReducer
    }
)

let store = createStore(reducers);

window.store = store;

export default store;