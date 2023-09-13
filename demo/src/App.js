import './App.css';
import UserProfile from './components/UserProfile';
import Event from './components/Event';

function App() {

  return (
    <div className="App">
      {/* <UserProfile name='Mark' age={25} occupation='Software Engineer' />
      <UserProfile name='Steve' age={27} occupation='Embedded Engineer' />
      <UserProfile name='Ryan' age={35} occupation='Mechanical Engineer' /> */}
      <Event/>
    </div>
  );
}

export default App;
