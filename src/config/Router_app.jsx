import * as React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Sign_up } from "../pages/Sign_up";
import { Log_in } from "../pages/Log_in";
import { Layout } from "../component/Layout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<Layout />}>        
        <Route path="" element={<Sign_up />} />
        <Route path="login" element={<Log_in />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        </Route>
    )
)


const Router_app = () => {
    return (
        <RouterProvider router={router} />
  )
}

export { Router_app }