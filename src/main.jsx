import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import App from './App.jsx'
import Navbar from './components/Navbar.jsx';
import NotFound404 from './pages/NotFound404.jsx';
import About from './pages/About.jsx';
import Page505055 from './pages/Page505055.jsx';
import ToDoList from './pages/ToDoList.jsx';
import './index.css'
import Counter from './pages/Counter.jsx';
import Click from './pages/Click.jsx';
import Greeting from './pages/Greeting.jsx';
import Register from './pages/Register.jsx';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/greeting",
        element: <Greeting name="Kevin" />,
      },
      {
        path: "/click",
        element: <Click />,
      },
      {
        path: "/505055",
        element: <Page505055 />,
      },
      {
        path: "/todolist",
        element: <ToDoList />,
      },
      {
        path: "/count",
        element: <Counter />,
      },
      {
        path: "/*",
        element: <NotFound404 />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
