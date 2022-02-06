
    let Rerender = () =>
    {
        console.log('state changed!');
    }



let state =
    {
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
    }

    export const AddMessage = () =>
    {
        let NewMessage = {text: state.messagesPage.newMessageText, id:3}
        state.messagesPage.messages.push(NewMessage);
        state.messagesPage.newMessageText = '';
        Rerender(state);
    }

    export const UpdateNewMessageText = (newMessage) =>
    {
        state.messagesPage.newMessageText = newMessage;
        Rerender(state);
    }

    export const AddPost = () =>
    {

        let NewPost = {id: 5, text: state.profilePage.newPostText, likes: 0}
        state.profilePage.posts.push(NewPost);
        state.profilePage.newPostText = '';
        Rerender(state);
    };

   export const UpdateNewPostText = (newText) =>
    {
        state.profilePage.newPostText = newText;
        Rerender(state);
    }

    export const subscribe = (observer) =>
    {
        Rerender = observer;
    }

    export default state;