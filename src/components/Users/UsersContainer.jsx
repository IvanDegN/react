import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) =>
{
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage
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
        },

        setCurrentPage: (pageNumber) =>
        {
            dispathc(setCurrentPageAC(pageNumber))
        },

        setTotalUsersCount: (totalCount) =>
        {
            dispathc(setUsersTotalCountAC(totalCount))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)