import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './pages/Error';
import Main from './pages/Main';
import Login from './pages/Login';
import App from './pages/App';
import Dashboard from './pages/Dashboard';
import Compare from './pages/Compare';
import Settings from './pages/Settins';
import About from './pages/About';

const appRouter = createBrowserRouter([
  {path: "/", element: <Main mobile={true} />, errorElement: <Error message='Home Error'/>},
  {path: "/login", element: <Login/>, errorElement: <Error message='Login Error'/>},
  {path: "/app", element: <App/>, errorElement: <Error message='App Error'/>,
    children:[
      {path: "/app/dashboard", element: <Dashboard/>, errorElement: <Error message='Dashboard error'/>},
      {path: "/app/compare", element: <Compare/>, errorElement: <Error message='Compare error'/>},
      {path: "/app/settings", element: <Settings/>, errorElement: <Error message='Settings error'/>},
      {path: "/app/about", element: <About/>, errorElement: <Error message='About error'/>},
    ]
  }
])

function Router() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default Router;
