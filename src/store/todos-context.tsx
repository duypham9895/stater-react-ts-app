import React, { useState } from "react";

import Todo from "../models/todo";

export type TodosContextValue = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodoById: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextValue>({
  items: [],
  addTodo: () => {},
  removeTodoById: () => {},
});

type Props = {
  children?: React.ReactNode;
};

export const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
  ]);

  const addTodoHandler = (text: string) => {
    console.log({ text });
    setTodos((prevState) => [new Todo(text), ...prevState]);
  };

  const removeTodoByIdHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodoById: removeTodoByIdHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};
