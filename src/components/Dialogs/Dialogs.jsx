import DialogsModulesCss from './Dialogs.module.css'
import React from "react";

const Dialogs = (props) =>
{
    let NewMessage = React.createRef();

    const AddMessage = () => {
        let action = {type: 'ADD-MESSAGE'};
        props.dispatch(action)  }

    const ChangeMessage = () =>
    {
        let message = NewMessage.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: message};
        props.dispatch(action)
    }

    return (
            <div className={DialogsModulesCss.dialogs}>
                <div className={DialogsModulesCss.dialogsItem}>
                    {props.dialogs}
                </div>
                <div className={DialogsModulesCss.messages}>
                    {props.messages}
                    <textarea ref={NewMessage} value={props.newMessageText} onChange={ChangeMessage}/>
                    <div><button onClick={AddMessage} >Add message</button></div>
                </div>
            </div>
    );
}

export  default  Dialogs;