import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import StudentProjects from "./routes/student-projects";
// import Game from  "../Game-PR/index.html"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    // path: "/game",
    // element: <Game/>,
  },{
    path:"student-projects",
    element: <StudentProjects/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
