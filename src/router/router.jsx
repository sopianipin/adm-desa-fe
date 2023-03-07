import React from "react";
import { useRoutes } from "react-router-dom";
import App from "../App";
import LoginComponent from "../auth/LoginComponent";
import Home from "../component/Home";
import ListPenduduk from "../component/penduduk/ListPenduduk";
import AddProgramDetail from "../component/program-detail/AddProgramDetail";
import ListProgramDetail from "../component/program-detail/ListProgramDetail";
import AddProgram from "../component/program/AddProgram";
import EditProgram from "../component/program/EditProgram";
import ListProgram from "../component/program/ListProgram";

const isAuth = () => {
  return localStorage.getItem("username") != null;
};
const RouterComponent = () => {
  const isLoggin = isAuth();
  const r = useRoutes([
    {
      path: "/",
      element: isLoggin ? <App /> : <LoginComponent />,
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
        {
          path: "/list-program-detail",
          element: <ListProgramDetail />,
        },
        {
          path: "/add-program-detail",
          element: <AddProgramDetail />,
        },
        // {
        //   path: "/edit-program-detail/:id",
        //   element: <EditProgramDetail />,
        // },
        {
          path: "/list-penduduk",
          element: <ListPenduduk />,
        },
        // {
        //   path: "/add-penduduk",
        //   element: <AddPenduduk />,
        // },
        // {
        //   path: "/list-village-org-structure",
        //   element: <ListVillageOrgStructure />,
        // },
        // {
        //   path: "/add-village-org-structure",
        //   element: <AddVillageOrgStructure />,
        // },
        // {
        //   path: "/list-village-org",
        //   element: <ListVillageOrg />,
        // },
        // {
        //   path: "/add-village-org",
        //   element: <AddVillageOrg />,
        // },
        // {
        //   path: "/list-village-org-detail",
        //   element: <ListVillageOrgDetail />,
        // },
        // {
        //   path: "/add-village-org-detail",
        //   element: <AddVillageOrgDetail />,
        // },
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
