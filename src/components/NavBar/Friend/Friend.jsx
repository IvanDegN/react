
import FriendCssModule from './Friend.module.css'



const  Friend = (props) =>
{


    return (
        <div className={FriendCssModule.friendItem}>

            {props.names}
        </div>
    );
}

export default Friend;