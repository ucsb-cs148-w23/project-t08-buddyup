import { createBrowserRouter } from 'react-router-dom';
import Dashboard from "components/dashboard";
import Comments from "components/comments";
import Login from "components/auth/Login";
import Layout from 'components/layout';
import Profile from 'components/profile';
import ProfileEdit from 'components/profileedit';
import Information from 'components/information';

export const ROOT = "/";
export const LOGIN = "/login";
export const DASHBOARD = "/protected/dashboard";
export const INFORMATION = "/protected/information";
export const COMMENTS = "/protected/dashboard/comments/:postID";
export const PROTECTED = "/protected";
export const PROFILE = "/protected/profile/:id";
export const PROFILEEDIT = "/protected/profileedit/:id";

export const router = createBrowserRouter ([
    { path: ROOT, element: <Login /> },
    { path: LOGIN, element: <Login /> },
    
    
    { path: PROTECTED, element: <Layout />, children: [
        { path: DASHBOARD, element:  <Dashboard />},
        { path: COMMENTS, element: <Comments />},
        { path: PROFILE, element: <Profile /> },
        { path: PROFILEEDIT, element: <ProfileEdit /> },
        { path: INFORMATION, element:  <Information />}
    ]},
]);
