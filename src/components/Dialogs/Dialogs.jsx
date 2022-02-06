import DialogsModulesCss from './Dialogs.module.css'
import React from "react";

const Dialogs = (props) =>
{
    let NewMessage = React.createRef();

    const AddMessage = () => { props.AddMessage()  }

    const ChangeMessage = () =>
    {
        let message = NewMessage.current.value;
        props.UpdateNewMessageText(message)
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