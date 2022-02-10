

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
        {
            let NewPost = {id: 5, text: state.newPostText, likes: 0}
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(NewPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
        {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;

    }


}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default ProfileReducer;