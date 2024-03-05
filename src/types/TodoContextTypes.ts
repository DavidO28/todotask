export type TodoTypes = {
  id: number;
  text: string;
};

export type TodoContextType = {
  todos: TodoTypes[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  renameTodo: (id: number, newText: string) => void;
};