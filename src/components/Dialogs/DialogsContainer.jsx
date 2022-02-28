

import {AddMessageActionCreator, ChangeMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps =(state) =>
{
    return {

        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {

        AddMessage: () => {dispatch(AddMessageActionCreator())},
        ChangeMessage: (message) => {dispatch(ChangeMessageActionCreator(message))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export  default  DialogsContainer;