import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '5f997686-6403-4b1a-8091-51ee4360beaf'}

})


export const usersAPI =
    {
        getUsers(currentPage = 1, pageSize = 10)
        {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
        },

        getProfile(userId = 18752)
        {

           return  instance.get(`profile/` + userId ).then(response => response.data);
        },

        getAuthMe()
        {
            return instance.get('auth/me').then(response => response.data);
        },

        unFollow(users)
        {
            return instance.delete(`follow/${users.id}`).then(response => response.data);
        },

        follow(users)
        {
            return instance.post(`follow/${users.id}`, {}).then(response => response.data);
        }

    }


