

import {AddMessageActionCreator, ChangeMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps =(state) =>
{
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {

        AddMessage: () => {dispatch(AddMessageActionCreator())},
        ChangeMessage: (message) => {dispatch(ChangeMessageActionCreator(message))}
    }
}




export  default  compose(connect(mapStateToProps, mapDispatchToProps),WithAuthRedirect)(Dialogs);