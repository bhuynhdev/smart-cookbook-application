import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.css';
import Root, { loader as rootLoader } from './pages/root.jsx';
import RecipeDetailPage, { loader as recipeDetailLoader } from './pages/RecipeDetail';
import WelcomePage from './pages/Welcome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <WelcomePage />,
        // loader: rootLoader,
      },
      {
        path: '/recipe/:recipeId',
        element: <RecipeDetailPage />,
        loader: recipeDetailLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
