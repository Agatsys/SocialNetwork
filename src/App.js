import { Route } from 'react-router-dom';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import ProfilePage from './components/content/content';
import Music from './components/content/music/music';
import Settings from './components/content/settings/settings';
import DialogsContainer from './components/content/dialogs/dialogsContainer';
import UsersAPI from './components/users/usersAPI';


const App = (props) => {
  return (

    <div className='app-wrapper'>
      <Header />
      <Navigation state={props.state} />
      <div className="app-wrapper-content">
        <Route path='/dialogs' component={() => <DialogsContainer />} />
        <Route path='/profile' component={() => <ProfilePage />} />
        <Route path='/users' component={() => <UsersAPI />} />
        <Route path='/music' component={() => <Music />} />
        <Route path='/settings' component={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;



