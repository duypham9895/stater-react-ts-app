import React, { useContext } from "react";

import classes from "./Todos.module.css";
import TodoItem from "./TodoItem";
import { TodosContext, TodosContextValue } from "../store/todos-context";

type Props = {
  children?: React.ReactNode;
};

const Todos: React.FC<Props> = () => {
  const { items, removeTodoById } = useContext<TodosContextValue>(TodosContext);

  return (
    <ul className={classes.todos}>
      {items.map(({ id, text }) => (
        <TodoItem
          key={id}
          id={id}
          text={text}
          onRemoveTodoById={removeTodoById.bind(this, id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
