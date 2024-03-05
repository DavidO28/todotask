import { lazy } from "react";

const Home = lazy(() => import("../pages/home/Home"));
const Addtodo = lazy(() => import("../pages/addtodo/AddTodo"));
const Todolist = lazy(() => import("../pages/todolist/TodoList"));

export const MyElements = {
  Home,
  Addtodo,
  Todolist,
};
