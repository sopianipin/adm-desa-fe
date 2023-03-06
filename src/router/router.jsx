import React from "react";
import { useRoutes } from "react-router-dom";
import App from "../App";
import LoginComponent from "../auth/LoginComponent";
import Home from "../component/Home";
import AddProgram from "../component/program/AddProgram";
import EditProgram from "../component/program/EditProgram";
import ListProgram from "../component/program/ListProgram";

const RouterComponent = () => {
  let r = useRoutes([
    {
      path: "/",
      element: <App />,
      // element: isLoggin ? <App /> : <LoginComponent />,
      // errorElement: <PageNotFoundComponent />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/list-program",
          element: <ListProgram />,
        },
        {
          path: "/add-program",
          element: <AddProgram />,
        },
        {
          path: "/edit-program/:id",
          element: <EditProgram />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginComponent />,
    },
  ]);
  return r;
};

export default RouterComponent;
