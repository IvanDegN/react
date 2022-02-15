
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component
{


    componentDidMount()
    {
        if(this.props.users.length === 0 )
        {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }

    onPageChanged = (pageNumber) =>
    {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)});
    }


    render()
    {


        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>

    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)