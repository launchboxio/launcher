import * as React from "react"

import "normalize.css";
import "@popperjs/core/lib/popper.js";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

import Router from "./components/router";
import {RouterProvider} from "react-router-dom";

export default () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}