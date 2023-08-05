import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Enterprise, Pricing, SignIn, SignUp, ContactSales } from './pages';

const router = createBrowserRouter([
    {
      path: "/slackClone",
      element: <App />,
    },
    {
      path: "/enterprise",
      element: <Enterprise />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
        path: '/signin',
        element: <SignIn />,
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/contact-sales',
        element: <ContactSales />
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} basename='https://kwotong.github.io/slackClone' />
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Enterprise, Pricing, SignIn, SignUp, ContactSales } from './pages';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const AppRouter = () => (
//   <BrowserRouter basename="/slackClone">
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/enterprise" element={<Enterprise />} />
//       <Route path="/pricing" element={<Pricing />} />
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/contact-sales" element={<ContactSales />} />
//     </Routes>
//   </BrowserRouter>
// );

// root.render(<AppRouter />);
