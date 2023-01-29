import * as React from "react"
import { createHashRouter } from "react-router-dom";
import Root from "./root"
import ErrorPage from "./error-page";

import ClusterPages from "../clusters"
import { loader as clusterLoader } from "../clusters/view"

import ProjectPages from "../projects"
import { loader as projectLoader } from "../projects/view"

import AccountPages from "../accounts"
import CatalogPages from "../catalogs"
import ServicePages from "../services"

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{
      path: "clusters",
      children: [{
        path: "",
        element: <ClusterPages.List />
      }, {
        path: ":clusterId",
        element: <ClusterPages.View />,
        loader: clusterLoader
      }]
    }, {
      path: "projects",
      children: [{
        path: "",
        element: <ProjectPages.List />
      }, {
        path: ":projectId",
        element: <ProjectPages.View />,
        loader: projectLoader
      }]
    }, {
      path: "addons",
      element: <div>Viewing addons</div>
    }, {
      path: "accounts",
      children: [{
        path: "",
        element: <AccountPages.List />
      }, {
        path: ":accountId",
        element: <AccountPages.View />
      }, {
        path: "new",
        element: <AccountPages.New />
      }]
    }, {
      path: "catalogs",
      children: [{
        path: "",
        element: <CatalogPages.List />
      }, {
        path: ":catalogId",
        element: <CatalogPages.View />
      }, {
        path: "new",
        element: <CatalogPages.New />
      }]
    }, {
      path: "services",
      children: [{
        path: "",
        element: <ServicePages.List />
      }, {
        path: ":serviceId",
        element: <ServicePages.View />
      }, {
        path: "new",
        element: <ServicePages.New />
      }]
    }]
  }
]);

console.log(router)
export default router