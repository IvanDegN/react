const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
                if(action.type === ADD_POST)
                {
                    let NewPost = {id: 5, text: this._state.profilePage.newPostText, likes: 0}
                    this._state.profilePage.posts.push(NewPost);
                    this._state.profilePage.newPostText = '';
                    this._callSubscriber(this._state);
                }
                else if(action.type === UPDATE_NEW_POST_TEXT)
                {
                    this._state.profilePage.newPostText = action.newText;
                    this._callSubscriber(this._state);
                }
                else if(action.type === UPDATE_NEW_MESSAGE_TEXT)
                {
                    this._state.messagesPage.newMessageText = action.newMessage;
                    this._callSubscriber(this._state);
                }
                else if(action.type === ADD_MESSAGE)
                {
                    let NewMessage = {text: this._state.messagesPage.newMessageText, id:3}
                    this._state.messagesPage.messages.push(NewMessage);
                    this._state.messagesPage.newMessageText = '';
                    this._callSubscriber(this._state);
                }
            }
        }

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE})

export const ChangeMessageActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message})

    export default store;
    window.state = store;