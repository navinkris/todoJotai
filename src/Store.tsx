import { atom } from "jotai";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const todosAtom = atom<Todo[]>([]);
export const filterAtom = atom<'all' | 'completed' | 'incomplete'>('all');

export const filteredTodosAtom = atom((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);
  if (filter === 'completed') {
    return todos.filter((todo) => todo.completed);
  }
  if (filter == 'incomplete') {
    return todos.filter((todo) => !todo.completed);
  }
  return todos;
});