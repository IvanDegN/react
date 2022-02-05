
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Post from "./components/Profile/MyPosts/Post/Post";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";
import FriendItem from "./components/NavBar/Friend/FriendItem/FriendItem";



const App = (props) =>
{
    let posts = props.posts.map((post,key) => <Post key={key} text={post.text} likes = {post.likes}  />)
    let dialogElements = props.users.map( (dialog, key) => <DialogItem key={key} name={dialog.name} id={dialog.id}/> )
    let messageElements = props.messages.map((message, key) => <Message key={key} text={message.text} id={message.id}/>)
    let friends = props.friends.map((friends, key) => <FriendItem key={key} name={friends.name} id={friends.id}/>)

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <NavBar  friends={friends}/>
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/messages/' element={<Dialogs  dialogs={dialogElements} messages={messageElements} />}/>
                      <Route path='/profile' element={<Profile posts={posts} />}/>
                      <Route path='/news' element={<News />}/>
                      <Route path='/music' element={<Music />}/>
                      <Route path='/settings' element={<Settings />}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
