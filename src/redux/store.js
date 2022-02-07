import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store =
        {
            _state: {
                profilePage:
                    {
                        posts:[{id: 1, text: 'Hi', likes: 20},{id: 2, text: 'Where are you from?', likes: 15}],
                        newPostText: ''
                    },
                messagesPage:
                    {
                        users:[{name: 'Ivan', id: 1},{name: 'Nikolay', id: 2}],
                        messages:[{text: 'Hi', id:1},{text: 'Hi', id:2}],
                        newMessageText: ''
                    },
                SideBar:
                    {
                        names:[{name: 'Ivan', id:1},{name: 'Nikolay', id:2},{name: 'Elena', id:3}]
                    }
            },
            _callSubscriber() {
                console.log('state changed!');
            },

            getState() {
                return this._state;
            },
            subscribe(observer) {
                this._callSubscriber = observer;
            },


            dispatch(action)
            {

                this._state.profilePage = profileReducer(this._state.profilePage, action);
                this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
                this._state.SideBar = sidebarReducer(this._state.SideBar, action);

                this._callSubscriber(this._state);

            }
        }





    export default store;
    window.state = store;