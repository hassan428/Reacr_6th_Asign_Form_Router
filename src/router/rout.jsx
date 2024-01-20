import React from 'react'
import { Link, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from '../Home'
import { About } from '../About'
const Rot = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Home />
                <Link to="about">About Us</Link>
            </div>
        ),
    },
    {
        path: "about",
        element: <About />,
    },
]);


<RouterProvider router={Router} />
export {Rot}