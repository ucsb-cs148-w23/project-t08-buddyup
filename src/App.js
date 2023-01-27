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
        Hello World
      </header>
      <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} placeholder="Input is pushed to Firebase" />
        <button type = "submit">Save</button>
        </form>
    </div>
  );
}

export default App;
