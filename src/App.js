import './App.css';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';

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
        Buddy Up
      </header>
      <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} placeholder="Text pushed to Firebase" />
        <button type = "submit">Save</button>
        </form>
        <MyButton />
    </div>
  );
}

function MyButton() {
  return (
    <button className='button'>
      Login
    </button>
  );
}

export default App;
