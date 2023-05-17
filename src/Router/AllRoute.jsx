import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import NewsComponent from "../Components/Home/NewsComponent/NewsComponent";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: '/categories/:id',
                        element: <NewsComponent />,
                        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
                    }
                ]
            },
            {
                path: '/:id/newsdetails',
                element: <NewsDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/${params.id}/newsdetails`)
            },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ]
    },
])

export default router;