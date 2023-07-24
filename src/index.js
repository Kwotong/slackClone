import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Enterprise, Pricing, SignIn, SignUp } from './pages';

const router = createBrowserRouter([
    {
      path: "/slackClone",
      element: <App />,
    },
    {
      path: "enterprise",
      element: <Enterprise />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
    {
        path: 'signin',
        element: <SignIn />,
    },
    {
        path: 'signup',
        element: <SignUp />
    }, 
    {
        path: 'contact-sales',
        element: <SignUp />
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);