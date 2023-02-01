import './App.css';
import handleSubmit from './handles/handlesubmit'; //change this to a new function
//also in handleSubmit for ease?
import { useRef } from 'react'; //ummm uhh

function CreatePostPage() {
  const dataRef = useRef()

  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value) //change this to the new function
    dataRef.current.value = ""
  }

  return (
    <div className="App">
      <header className="App-header">
        Make a Post
      </header>
      <header className="subheading">
        Write some important things about yourself that you want your potential roommates to know.
      </header>
      <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} placeholder="Text pushed to Firebase" />
        <button type = "submit">Save</button>
        </form>
    </div>
  );
}

export default App;