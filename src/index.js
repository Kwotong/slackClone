import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Enterprise from './pages/Enterprise/Enterprise';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Enterprise />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);