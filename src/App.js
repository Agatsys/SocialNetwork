import { Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Music from './components/content/music/music';
import Settings from './components/content/settings/settings';
import DialogsContainer from './components/content/dialogs/dialogsContainer';
import UsersAPI from './components/users/usersAPI';
import ProfilePageAPI from './components/content/contentAPI';
import HeaderAPI from './components/header/headerAPI';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderAPI />
      <Navigation state={props.state} />
      <div className="app-wrapper-content">
        <Route path='/dialogs' component={() => <DialogsContainer />} />
        <Route path='/profile/:userId?' component={() => <ProfilePageAPI />} /> {/* ? - path after : is optional */}
        <Route path='/users' component={() => <UsersAPI />} />
        <Route path='/music' component={() => <Music />} />
        <Route path='/settings' component={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;



