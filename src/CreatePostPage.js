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
        <div className='dropdown'>
            <button 
                onClick="dropdownFunc()"
                className='button'
            >
                -Select your year in School-
            </button>
            <div id='yearDropdown'>
                <a href='#1'>1st Year</a>
                <a href='#2'>2nd Year</a>
                <a href='#3'>3rd Year</a>
                <a href='#4'>4th Year</a>
                <a href='#5'>5th Year +</a>
                <a href='#Grad'>Graduate Student</a>
            </div>
        </div>
        <script>
            function dropdownFunc() {
                document.getElementById("yearDropdown").classList.toggle("show")
            }
        </script>
        <p className='subheading'>Bio</p>
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