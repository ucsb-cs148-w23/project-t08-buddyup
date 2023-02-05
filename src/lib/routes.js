import { createBrowserRouter } from 'react-router-dom';
import Dashboard from "components/dashboard";
import Comments from "components/comments";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const DASHBOARD = "/dashboard";
export const COMMENTS = "/comments/:postID";

export const router = createBrowserRouter ([
    { path: ROOT, element: "Public Root" },
    { path: LOGIN, element: "Login" },
    { path: REGISTER, element: "Register" },
    { path: DASHBOARD, element:  <Dashboard />},
    { path: COMMENTS, element: <Comments/>},
]);