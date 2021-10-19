import { Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Music from './components/content/music/music';
import Settings from './components/content/settings/settings';
import Dialogs from './components/content/dialogs/dialogs';
import UsersAPI from './components/users/usersAPI';
import ProfilePageAPI from './components/content/contentAPI';
import HeaderAPI from './components/header/headerAPI';
import Login from './components/login/login';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderAPI />
      <Navigation state={props.state} />
      <div className="app-wrapper-content">
        <Route exact path='/dialogs' component={() => <Dialogs />} />
        <Route exact path='/profile/:userId?' component={() => <ProfilePageAPI />} /> {/* ? - path after : is optional */}
        <Route exact path='/users' component={() => <UsersAPI />} />
        <Route exact path='/music' component={() => <Music />} />
        <Route exact path='/settings' component={() => <Settings />} />
        <Route exact path='/login' component={() => <Login />} />
      </div>
    </div>
  );
}

export default App;



