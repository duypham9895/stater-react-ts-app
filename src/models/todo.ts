import { nanoid } from "nanoid";

class Todo {
  id: string;
  text: string;

  constructor(text: string) {
    this.text = text;
    this.id = nanoid();
  }
}

export default Todo;
