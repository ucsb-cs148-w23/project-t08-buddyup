import './App.css';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';
import { auth} from "./firebase_setup/firebase"
import { getAuth, signOut } from "firebase/auth";

function App() {
  const dataRef = useRef()

  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }

  return (
    <div className="App">
      <header className="App-header">
        Hello World
      </header>
      <form onSubmit={submithandler}>
        <button type = "submit">Log In</button>
        </form>
    </div>
  );
}

// function SignOut() {
//   const auth = getAuth();
//   signOut(auth);
// }



export default App;
