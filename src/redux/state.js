import {Rerender} from "../render";


let state =
    {
        profilePage:
            {
                posts:[{id: 1, text: 'Hi', likes: 20},{id: 2, text: 'Where are you from?', likes: 15}],
                newPostText: 'Redux'
            },
        messagesPage:
            {
                users:[{name: 'Ivan', id: 1},{name: 'Nikolay', id: 2}],
                messages:[{text: 'Hi', id:1},{text: 'Hi', id:2}]
            },
        SideBar:
            {
                names:[{name: 'Ivan', id:1},{name: 'Nikolay', id:2},{name: 'Elena', id:3}]
            }
    }

window.state = state;
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


    export default state;