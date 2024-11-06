import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
<<<<<<< HEAD:src/Labs/Lab4/ReduxExamples/Todos/TodoList.tsx
      <ul className="w-50 list-group">
=======
      <ul className="list-group">
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a:src/Labs/Lab4/ReduxExamples/todos/TodoList.tsx
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
<<<<<<< HEAD:src/Labs/Lab4/ReduxExamples/Todos/TodoList.tsx
  );
}
=======
);}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a:src/Labs/Lab4/ReduxExamples/todos/TodoList.tsx
