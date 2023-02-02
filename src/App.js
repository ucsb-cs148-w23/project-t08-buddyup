import './App.css';
import {auth} from './firebase_setup/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './login';
import Mainpage from './main';

function App() {
  const [user] = useAuthState(auth);
  return (
    user ? <Mainpage/> : <Login/>
  );
}
  
export default App;
