import { Route } from 'react-router-dom';
import Dialogs from './components/content/dialogs/dialogs';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import ProfilePage from './components/content/content';
import News from './components/content/news/news';
import Music from './components/content/music/music';
import Settings from './components/content/settings/settings';


const App = (props) => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navigation state={props.state}/>
        <div className="app-wrapper-content">
          
          <Route path='/dialogs' render={ () => 
            <Dialogs store={props.store} /> }/>       

          <Route path='/profile' render={ () => 
            <ProfilePage data={props.state.profilePage} dispatch={props.dispatch} /> } />

          <Route path='/news' render={ () => <News /> }/>
          <Route path='/music' render={ () => <Music /> }/>
          <Route path='/settings' render={ () => <Settings /> }/>
        </div>
      </div>
  
  );
}

export default App;



