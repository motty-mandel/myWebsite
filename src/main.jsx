import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>404 Not Found</h1>,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
    ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);