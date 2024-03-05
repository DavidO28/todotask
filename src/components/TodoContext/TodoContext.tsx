import { createContext, useContext, useState } from "react";
import { TodoTypes, TodoContextType } from "../../types/TodoContextTypes";

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  const [idCounter, setIdCounter] = useState<number>(1); 

  const addTodo = (text: string) => {
    const newTodo: TodoTypes = {
      id: idCounter,
      text,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setIdCounter((prevIdCounter) => prevIdCounter + 1);
    alert("Successfully added new task! Go to Todo List  to see it")
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const renameTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, renameTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
