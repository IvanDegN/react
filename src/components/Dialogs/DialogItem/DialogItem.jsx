import DialogsModulesCss from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>
{
    let path = '/messages/' + props.id;
    return (
        <div className={DialogsModulesCss.item}>
            <img alt='avatar' src='https://cspromogame.ru//storage/upload_images/avatars/4081.jpg' align='left' className={DialogsModulesCss.messageAva}/>
            <div><NavLink to={path}>{props.name}</NavLink></div>
        </div>
    );

}

export default DialogItem;