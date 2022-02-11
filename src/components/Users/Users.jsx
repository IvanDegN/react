import styles from './Users.module.css'

const Users = (props) =>
{
    if(props.users.length === 0 )
    {
        props.setUsers([ {id: 1, photoUrl: 'https://www.maxpixel.net/static/photo/640/Avatar-Blank-Profile-Picture-Display-Pic-Mystery-Man-973460.jpg', followed: false, name: 'Dmitry K.', status: 'I am looking for a job right now...', location:{ country: 'Belarus', city: 'Minsk'} },
            {id: 2, photoUrl: 'https://www.maxpixel.net/static/photo/640/Avatar-Blank-Profile-Picture-Display-Pic-Mystery-Man-973460.jpg', followed: true, name: 'Ivan D.', status: 'I am looking for a job right now...', location:{ country: 'Russia', city: 'Moscow'} },
            {id: 3, photoUrl: 'https://www.maxpixel.net/static/photo/640/Avatar-Blank-Profile-Picture-Display-Pic-Mystery-Man-973460.jpg', followed: false, name: 'Sasha M.', status: 'I am looking for a job right now...', location:{ country: 'Russia', city: 'Saratov'} }
        ])
    }




    return (

        <div>
            {props.users.map(users => <div key={users.id}>

            <span>
                <div>
                    <img src={users.photoUrl} className={styles.userPhoto} alt='ava'/>
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
                    <div>{users.location.country}</div>
                    <div>{users.location.city}</div>
                </span>
            </span>

        </div>)}
        </div>
    );
}

export default Users