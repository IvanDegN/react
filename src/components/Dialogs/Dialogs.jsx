import DialogsModulesCss from './Dialogs.module.css'
import React from "react";
import {AddMessageActionCreator, ChangeMessageActionCreator} from "../../redux/state";




const Dialogs = (props) =>
{
    let NewMessage = React.createRef();

    const AddMessage = () =>
    {

        props.dispatch(AddMessageActionCreator())
    }

    const ChangeMessage = () =>
    {
        let message = NewMessage.current.value;
        props.dispatch(ChangeMessageActionCreator(message))
    }

    return (
            <div className={DialogsModulesCss.dialogs}>
                <div className={DialogsModulesCss.dialogsItem}>
                    {props.dialogs}
                </div>
                <div className={DialogsModulesCss.messages}>
                    {props.messages}
                    <textarea ref={NewMessage} value={props.newMessageText} onChange={ChangeMessage} placeholder='Enter your message'/>
                    <div><button onClick={AddMessage} >Add message</button></div>
                </div>
            </div>
    );
}

export  default  Dialogs;