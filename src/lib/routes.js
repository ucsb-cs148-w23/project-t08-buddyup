import { createBrowserRouter } from 'react-router-dom';
import Dashboard from "components/dashboard";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const DASHBOARD = "/dashboard";

export const router = createBrowserRouter ([
    { path: ROOT, element: "Public Root" },
    { path: LOGIN, element: "Login" },
    { path: REGISTER, element: "Register" },
    { path: DASHBOARD, element:  <Dashboard />},
]);