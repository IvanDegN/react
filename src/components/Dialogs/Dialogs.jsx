import DialogsModulesCss from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) =>
{
    let path = '/messages/' + props.id;
    return (
        <div className={DialogsModulesCss.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );

}

const Message = (props) =>
{
    return (
        <div className={DialogsModulesCss.messagesItem}>{props.text}</div>
    );
}


const Dialogs = () =>
{

    let Users =
        [
                {name: 'Ivan', id: 1},
                {name: 'Nikolay', id: 2}
        ]
    let Messages =
        [
            {text: 'Hi', id:1},
            {text: 'Hi', id:2}
        ]
    let dialogElements = Users.map( (dialog, key) => <Dialog key={key} name={dialog.name} id={dialog.id}/> )
    let messageElements = Messages.map((message, key) => <Message key={key} text={message.text} id={message.id}/>)

    return (

            <div className={DialogsModulesCss.dialogs}>
                <div className={DialogsModulesCss.dialogsItem}>
                    {dialogElements}
                </div>
                <div className={DialogsModulesCss.messages}>
                    {messageElements}
                </div>
            </div>



    );
}

export  default  Dialogs;