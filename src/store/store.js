import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
     addTodo: (text, dueDateTime) =>
  set((state) => ({
    todos: [
      ...state.todos,
      {
        id: Date.now(),
        text,
        dueDateTime, // save this too
      },
    ],
  })),
      removeTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
      })),
    }),
    {
      name: "todo-storage", // name in localStorage
    }
  )
);