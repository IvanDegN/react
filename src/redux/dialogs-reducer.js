const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    users:[{name: 'Ivan', id: 1},{name: 'Nikolay', id: 2}],
    messages:[{text: 'Hi', id:1},{text: 'Hi', id:2}],
    newMessageText: ''
};

const DialogsReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
               return {
                    ...state,
                    newMessageText: action.newMessage
                };
        case ADD_MESSAGE:
            let NewMessage = {text: state.newMessageText, id: 3}
            return {
                    ...state,
                    messages: [...state.messages, NewMessage],
                    newMessageText: ''
                };
        default: return  state;
    }
}

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE})

export const ChangeMessageActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message})

export default DialogsReducer;