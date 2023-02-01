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
        <div>
            <button onClick="dropdownFunc()">umuhh</button>
        </div>
        <div>Bio</div>
        <input 
            className="bioBox" 
            type= "text" 
            ref={dataRef} 
            placeholder="Write stuff about yourself that you would want to know about potential roommates" 
        />
        <button type = "submit">Save</button>
      </form>
    </div>
  );
}

export default CreatePostPage;