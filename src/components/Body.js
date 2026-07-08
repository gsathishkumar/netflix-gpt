import Login from './Login';
import Browse from './Browse';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default Body;
