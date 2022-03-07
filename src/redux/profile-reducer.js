import {usersAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts:[{id: 1, text: 'Hi', likes: 20},{id: 2, text: 'Where are you from?', likes: 15}],
    newPostText: '',
    profile: null
};

const ProfileReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case ADD_POST:
            let NewPost = {id: 5, text: state.newPostText, likes: 0}
            return {
                posts: [...state.posts, NewPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }


}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) =>
{
    usersAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}

export default ProfileReducer;