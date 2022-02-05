import {Rerender} from "../render";


let state =
    {
        profilePage:
            {
                posts:
                    [
                    {id: 1, text: 'Hi', likes: 20},
                    {id: 2, text: 'Where are you from?', likes: 15}
                    ]
            },
            messagesPage:
            {
                users:
                    [
                    {name: 'Ivan', id: 1},
                    {name: 'Nikolay', id: 2}
                    ],
                messages:
                [
                    {text: 'Hi', id:1},
                    {text: 'Hi', id:2}
                ]
            },
                SideBar:
            {
            names:
                [
                    {name: 'Ivan', id:1},
                    {name: 'Nikolay', id:2},
                    {name: 'Elena', id:3}
                ]
        }




    }

    export const AddPost = (postMessage) =>
    {

        let NewPost = {id: 5, text: postMessage, likes: 0}
        state.profilePage.posts.push(NewPost);
        Rerender(state);
    };


    export default state;