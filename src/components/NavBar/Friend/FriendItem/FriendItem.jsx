import FriendCssModule from "../Friend.module.css";
import FriedItemCss from './FriendItem.module.css'


const FriendItem = (props) =>
{
    return (
        <div className={FriedItemCss.friendItem}>
            <img src='http://cdn.onlinewebfonts.com/svg/img_568656.png' alt='ava-plug' className={FriendCssModule.friendAva} />
            {props.name}
        </div>


    );
}
export default FriendItem;