import React from "react";

import classes from "./TodoItem.module.css";

type Props = {
  children?: React.ReactNode;
  id: string;
  text: string;
  onRemoveTodoById: (id: string) => void;
};

const TodoItem: React.FC<Props> = ({ id, text, onRemoveTodoById }) => {
  return (
    <li className={classes.item} onClick={onRemoveTodoById.bind(this, id)}>
      {text}
    </li>
  );
};

export default TodoItem;
