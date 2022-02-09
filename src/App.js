
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import { Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendItem from "./components/NavBar/Friend/FriendItem/FriendItem";
import DialogsContainer from "./components/Dialogs/DialogsContainer";





const App = (props) =>
{





    let friends = props.friends.map((friends, key) => <FriendItem key={key} name={friends.name} id={friends.id}/>)

  return (
          <div className='app-wrapper'>
              <Header />
              <NavBar  friends={friends}/>
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/messages/*' element={<DialogsContainer store={props.store}     />}/>
                      <Route path='/profile' element={<Profile store={props.store}  />}/>
                      <Route path='/news' element={<News />}/>
                      <Route path='/music' element={<Music />}/>
                      <Route path='/settings' element={<Settings />}/>
                  </Routes>
              </div>
          </div>
  );
}

export default App;
