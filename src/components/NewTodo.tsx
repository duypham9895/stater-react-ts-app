import React, { useContext, useRef } from "react";
import { TodosContext, TodosContextValue } from "../store/todos-context";

import classes from "./NewTodo.module.css";

type Props = {
  children?: React.ReactNode;
};

const NewTodo: React.FC<Props> = () => {
  const { addTodo } = useContext<TodosContextValue>(TodosContext);
  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredValue = textRef.current?.value;

    if (!enteredValue) {
      return;
    }

    console.log({ enteredValue });

    addTodo(enteredValue);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todo">Todo text</label>
      <input type="text" id="todo" ref={textRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
