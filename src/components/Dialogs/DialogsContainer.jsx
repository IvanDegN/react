
import React from "react";
import {AddMessageActionCreator, ChangeMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";




const DialogsContainer = (props) =>
{
  let state = props.store.getState().messagesPage


    const AddMessage = () =>
    {
        props.store.dispatch(AddMessageActionCreator())
    }

    const ChangeMessage = (message) =>
    {
        props.store.dispatch(ChangeMessageActionCreator(message))
    }

    return (
            <Dialogs AddMessage={AddMessage} ChangeMessage={ChangeMessage} messagesPage={state}/>
    );
}

export  default  DialogsContainer;