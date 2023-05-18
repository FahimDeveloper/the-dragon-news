import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import NewsComponent from "../Components/Home/NewsComponent/NewsComponent";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AllPrivetRoute from "./AllPrivetRoute";
import PrivetAuthRoute from "./PrivetAuthRoute";

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
                        loader: ({ params }) => fetch(`https://the-dragon-news-server-two-tau.vercel.app/categories/${params.id}`)
                    }
                ]
            },
            {
                path: '/:id/newsdetails',
                element: <AllPrivetRoute>
                    <NewsDetails />
                </AllPrivetRoute>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-two-tau.vercel.app/${params.id}/newsdetails`)
            },
            { path: "/login", element: <PrivetAuthRoute><Login /></PrivetAuthRoute> },
            { path: "/register", element: <PrivetAuthRoute><Register /></PrivetAuthRoute> },
        ]
    },
])

export default router;