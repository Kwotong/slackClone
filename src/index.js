import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Enterprise, Pricing } from './pages';

const router = createBrowserRouter([
    {
      path: "/",
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
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);