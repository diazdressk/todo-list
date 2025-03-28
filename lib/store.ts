"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Todo, TodoFormData } from './types';

interface TodoState {
  todos: Todo[];
  filters: {
    search: string;
    filter: 'all' | 'active' | 'completed';
    sort: 'createdAt' | 'priority' | 'title';
    direction: 'asc' | 'desc';
  };
  isFormVisible: boolean;
  addTodo: (data: TodoFormData) => void;
  updateTodo: (id: string, data: TodoFormData) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  setFilters: (filters: Partial<TodoState['filters']>) => void;
  setIsFormVisible: (isVisible: boolean) => void;
}

export const useTodo = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      filters: {
        search: '',
        filter: 'all',
        sort: 'createdAt',
        direction: 'desc',
      },
      isFormVisible: false,

      addTodo: (data) =>
        set((state) => ({
          todos: [
            {
              id: crypto.randomUUID(),
              createdAt: new Date(),
              updatedAt: new Date(),
              ...data,
            },
            ...state.todos,
          ],
          isFormVisible: false,
        })),

      updateTodo: (id, data) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? {
                ...todo,
                ...data,
                updatedAt: new Date(),
              }
              : todo
          ),
          isFormVisible: false,
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? {
                ...todo,
                completed: !todo.completed,
                updatedAt: new Date(),
              }
              : todo
          ),
        })),

      setFilters: (filters) =>
        set((state) => ({
          filters: {
            ...state.filters,
            ...filters,
          },
          isFormVisible: false,
        })),

      setIsFormVisible: (isVisible) =>
        set(() => ({
          isFormVisible: isVisible,
        })),
    }),
    {
      name: 'todo-storage',
    }
  )
); 