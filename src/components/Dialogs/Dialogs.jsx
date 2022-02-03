import DialogsModulesCss from './Dialogs.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";

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


const Dialogs = (props) =>
{

    let DataUsers =
        [
                {name: 'Ivan', id: 1},
                {name: 'Nikolay', id: 2}
        ]
    let DataMessages =
        [
            {text: 'Hi', id:1},
            {text: 'Hi', id:2},
            {text: 'Hi', id:3},
            {text: 'Hi', id:4}
        ]

    return (

            <div className={DialogsModulesCss.dialogs}>
                <div className={DialogsModulesCss.dialogsItem}>
                    <Dialog name={DataUsers[0].name} id={DataUsers[0].id}/>
                    <Dialog name={DataUsers[1].name} id={DataUsers[1].id}/>
                </div>
                <div className={DialogsModulesCss.messages}>
                    <Message text={DataMessages[0].text} id={DataMessages[0].id}/>
                    <Message text={DataMessages[0].text} id={DataMessages[1].id}/>
                    <Message text={DataMessages[0].text} id={DataMessages[2].id}/>
                    <Message text={DataMessages[0].text} id={DataMessages[3].id}/>
                </div>
            </div>



    );
}

export  default  Dialogs;