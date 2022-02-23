import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/ava.svg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                    {users.followed ? <button onClick={ ()=>
                        {

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, { withCredentials: true, headers: {'API-KEY': '5f997686-6403-4b1a-8091-51ee4360beaf'}  }
                            ).then(response => {
                                if (response.data.resultCode === 0)
                                {
                                    props.unfollow(users.id)
                                }
                            })

                    }


                    }>unfollow</button> :
                        <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {},  { withCredentials: true, headers: {'API-KEY': '5f997686-6403-4b1a-8091-51ee4360beaf'}  }

                                ).then(response => {
                                if (response.data.resultCode === 0)
                                {
                                    props.follow(users.id)
                                }
                            })

                        }
                        }>follow</button> }
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