import { createBrowserRouter } from 'react-router-dom';
import Dashboard from "components/dashboard";
import Comments from "components/comments";
import Login from "components/auth/Login";
import Layout from 'components/layout';

export const ROOT = "/";
export const LOGIN = "/login";
export const DASHBOARD = "/protected/dashboard";
export const COMMENTS = "/protected/dashboard/comments/:postID";
export const PROTECTED = "/protected";

export const router = createBrowserRouter ([
    { path: ROOT, element: "Public Root" },
    { path: LOGIN, element: <Login /> },
    
    { path: PROTECTED, element: <Layout />, children: [
        { path: DASHBOARD, element:  <Dashboard />},
        { path: COMMENTS, element: <Comments />},
    ]},
]);