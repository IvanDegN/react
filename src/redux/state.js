
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
            _callSubscriber()
            {
                console.log('state changed!');
            },
            getState()
            {
              return this._state;
            },
            AddMessage()
            {
                let NewMessage = {text: this._state.messagesPage.newMessageText, id:3}
                this._state.messagesPage.messages.push(NewMessage);
                this._state.messagesPage.newMessageText = '';
                this._callSubscriber(this._state);
            },
            UpdateNewMessageText(newMessage)
            {
                this._state.messagesPage.newMessageText = newMessage;
                this._callSubscriber(this._state);
            },
            AddPost()
            {
                let NewPost = {id: 5, text: this._state.profilePage.newPostText, likes: 0}
                this._state.profilePage.posts.push(NewPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            },
            UpdateNewPostText(newText)
            {
                this._state.profilePage.newPostText = newText;
                this._callSubscriber(this._state);
            },
            subscribe(observer)
            {
                this._callSubscriber = observer;
            }

        }

    export default store;
    window.state = store;