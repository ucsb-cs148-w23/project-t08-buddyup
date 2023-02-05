import Profile from 'components/profile';
import { createBrowserRouter } from 'react-router-dom';

export const PROFILE = "/profile";

export const router = createBrowserRouter ([
    { path: PROFILE, element: <Profile /> },
]);