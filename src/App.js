
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () =>
{


    //let friends = props.friends.map((friends, key) => <FriendItem key={key} name={friends.name} id={friends.id}/>)

  return (
          <div className='app-wrapper'>
              <HeaderContainer />
              <NavBar  />
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/messages/*' element={<DialogsContainer/>}/>
                      <Route path='/profile/*' element={<ProfileContainer/>}/>
                      <Route path='/news' element={<News />}/>
                      <Route path='/music' element={<Music />}/>
                      <Route path='/settings' element={<Settings />}/>
                      <Route path='/users' element={<UsersContainer />}/>
                  </Routes>
              </div>
          </div>
  );
}

export default App;
