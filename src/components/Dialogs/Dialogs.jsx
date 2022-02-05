import DialogsModulesCss from './Dialogs.module.css'
import React from "react";

const Dialogs = (props) =>
{
    let NewMessage = React.createRef();
    const AddMessage = () => { let message = NewMessage.current.value; alert(message);  }
    return (
            <div className={DialogsModulesCss.dialogs}>
                <div className={DialogsModulesCss.dialogsItem}>
                    {props.dialogs}
                </div>
                <div className={DialogsModulesCss.messages}>
                    {props.messages}
                    <textarea ref={NewMessage}></textarea>
                    <div><button onClick={AddMessage}>Add message</button></div>

                </div>

            </div>
    );
}

export  default  Dialogs;