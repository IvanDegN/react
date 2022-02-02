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

    return (

            <div className={DialogsModulesCss.dialogs}>
                <div className={DialogsModulesCss.dialogsItem}>
                    <Dialog name='Ivan' id='1'/>
                    <Dialog name='Nikola' id='2'/>
                    <Dialog name='Sveta' id='3'/>
                    <Dialog name='Nikita' id='4'/>
                </div>
                <div className={DialogsModulesCss.messages}>
                    <Message text='Hi'/>
                    <Message text='Hi'/>
                    <Message text='Hi'/>
                    <Message text='Hi'/>
                </div>
            </div>



    );
}

export  default  Dialogs;