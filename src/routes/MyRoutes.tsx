import { MyElements } from "./MyElements";
import { MyPaths } from "./MyPaths";
import ErrorPage from "../pages/error/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: MyPaths.home,
    element: <MyElements.Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: MyPaths.addtodo,
    element: <MyElements.Addtodo />,
    errorElement: <ErrorPage />,
  },
  {
    path: MyPaths.todolist,
    element: <MyElements.Todolist />,
    errorElement: <ErrorPage />,
  },
]);
