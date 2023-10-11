import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.css';
import RecipeDetailPage, { loader as recipeDetailLoader } from './pages/RecipeDetail';
import RecipeSessionPage, { loader as recipeSessionLoader } from './pages/RecipeSession';
import Root, { loader as rootLoader } from './pages/root.jsx';
import WelcomePage from './pages/Welcome';
import SearchPage from './pages/Search';

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
        path: '/search',
        element: <SearchPage />,
        loader: recipeDetailLoader,
      },
      {
        path: '/recipe/:recipeId',
        element: <RecipeDetailPage />,
        loader: recipeDetailLoader,
      },
      {
        path: '/session/:recipeId',
        element: <RecipeSessionPage />,
        loader: recipeSessionLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
