import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer  from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers
(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        SideBar: sidebarReducer,
        UsersPage: usersReducer,
        auth: AuthReducer

    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;