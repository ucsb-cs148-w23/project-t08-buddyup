import './App.css';
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
