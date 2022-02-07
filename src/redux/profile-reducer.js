const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ProfileReducer = (state, action) =>
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