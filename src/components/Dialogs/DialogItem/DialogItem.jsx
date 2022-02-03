import DialogsModulesCss from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>
{
    let path = '/messages/' + props.id;
    return (
        <div className={DialogsModulesCss.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );

}

export default DialogItem;