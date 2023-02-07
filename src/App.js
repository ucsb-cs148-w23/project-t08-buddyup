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
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import {router} from 'lib/routes';

export default function App() {
  return (
    <ChakraProvider>
      <RouterProvider router = {router}/>
    </ChakraProvider>
  );
}
