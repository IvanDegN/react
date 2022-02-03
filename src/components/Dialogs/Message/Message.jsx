import DialogsModulesCss from "../Dialogs.module.css";

const Message = (props) =>
{
    return (
        <div className={DialogsModulesCss.messagesItem}>{props.text}</div>
    );
}

export default Message;