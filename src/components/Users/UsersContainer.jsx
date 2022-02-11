import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) =>
{
    return {
        users: state.UsersPage.users
    }
}

let mapDispatchToProps = (dispathc) =>
{
    return {
        follow: (userId) =>
        {
            dispathc(followAC(userId));
        },

        unfollow: (userId) =>
        {
            dispathc(unfollowAC(userId));
        },

        setUsers: (users) =>
        {
            dispathc(setUsersAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)