import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/ava.svg";
import {NavLink} from "react-router-dom";


const Users = (props) =>
{

    let pagesCount = Math.ceil(props.totalUsersCount /props.pageSize);

    let pages = [];

    for(let i = 1; i <= pagesCount; i++)
    {
        pages.push(i);
    }

    return <div>
        {pages.map( page => { return <span onClick={ () => {props.onPageChanged(page); } } className={props.currentPage === page ? styles.selectedPage : styles.regularPage}>{page}</span>} )}
        {props.users.map(users => <div key={users.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + users.id}>
                    <img src={users.photos.small != null ? users.photos.small : userPhoto } className={styles.userPhoto} alt='ava'/>
                    </NavLink>
                </div>
                <div>
                    {users.followed ? <button onClick={ ()=>{props.unfollow(users.id)} }>unfollow</button> : <button onClick={ () => {props.follow(users.id)} }>follow</button> }
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

}

export default Users