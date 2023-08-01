import React from 'react';
import ReactDOM from 'react-dom/client';
import MainDemo from './pages/MainDemo.tsx';
import ControlElementDemo from './pages/ControlElementDemo';
import Error from './pages/Error.tsx';
import './index.css';

// react-router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainDemo />,
    errorElement: <Error />,
  },
  {
    path: '/control-element',
    element: <ControlElementDemo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
