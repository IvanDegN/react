import DialogsModulesCss from './Dialogs.module.css'
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) =>
{
  let state = props.messagesPage

    let dialogElements = state.users.map( (dialog, key) => <DialogItem key={key} name={dialog.name} id={dialog.id}/> )
    let messageElements = state.messages.map((message, key) => <Message key={key} text={message.text} id={message.id} />)
    let newMessageText = state.newMessageText;


    let NewMessage = React.createRef();

    const AddMessage = () =>
    {
        props.AddMessage();
    }

    const ChangeMessage = () =>
    {
        let message = NewMessage.current.value;
        props.ChangeMessage(message);
    }

    return (
            <div className={DialogsModulesCss.dialogs}>
                <div className={DialogsModulesCss.dialogsItem}>
                    {dialogElements}
                </div>
                <div className={DialogsModulesCss.messages}>
                    {messageElements}
                    <textarea ref={NewMessage} value={newMessageText} onChange={ChangeMessage} placeholder='Enter your message'/>
                    <div><button onClick={AddMessage} >Add message</button></div>
                </div>
            </div>
    );
}

export  default  Dialogs;