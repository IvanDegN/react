const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:[{id: 1, text: 'Hi', likes: 20},{id: 2, text: 'Where are you from?', likes: 15}],
    newPostText: ''
};

const ProfileReducer = (state = initialState, action) =>
{

    switch (action.type) {
        case ADD_POST:
            let NewPost = {id: 5, text: state.newPostText, likes: 0}
            state.posts.push(NewPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
        default: return  state;
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default ProfileReducer;