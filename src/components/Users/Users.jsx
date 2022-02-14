import React from "react";
import userPhoto from "../../assets/images/ava.svg";
import styles from "./Users.module.css";
import * as axios from "axios";


class Users extends React.Component
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
        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for(let i = 1; i <= pagesCount; i++)
        {
            pages.push(i);
        }

        return (
            <div>
                {pages.map( page => { return <span onClick={ () => { this.onPageChanged(page); } } className={this.props.currentPage === page ? styles.selectedPage : styles.regularPage}>{page}</span>} )}
                {this.props.users.map(users => <div key={users.id}>
            <span>
                <div>
                    <img src={users.photos.small != null ? users.photos.small : userPhoto } className={styles.userPhoto} alt='ava'/>
                </div>
                <div>
                    {users.followed ? <button onClick={ ()=>{this.props.unfollow(users.id)} }>unfollow</button> : <button onClick={ () => {this.props.follow(users.id)} }>follow</button> }
                </div>
            </span>
                    <span>
                <span>
                    <div>{users.name}</div>
                    <div>{users.status}</div>
                </span>
                <span>
                    <div>{'users.location.country'}</div>
                    <div>{'users.location.city'}</div>
                </span>
            </span>
                </div>)}
            </div>
        );
    }
}

export default Users