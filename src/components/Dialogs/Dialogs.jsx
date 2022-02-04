import DialogsModulesCss from './Dialogs.module.css'

const Dialogs = (props) =>
{
    return (
            <div className={DialogsModulesCss.dialogs}>
                <div className={DialogsModulesCss.dialogsItem}>
                    {props.dialogs}
                </div>
                <div className={DialogsModulesCss.messages}>
                    {props.messages}
                </div>
            </div>
    );
}

export  default  Dialogs;