import Profile from 'components/profile';
import Login from 'login';
import Mainpage from 'main';
import { createBrowserRouter } from 'react-router-dom';

export const PROFILE = "/profile";
export const LOGIN = "/";
export const MAINPAGE = "/main";

export const router = createBrowserRouter ([
    { path: PROFILE, element: <Profile /> },
    { path: LOGIN, element: <Login /> },
    { path: MAINPAGE, element: <Mainpage /> },
]);