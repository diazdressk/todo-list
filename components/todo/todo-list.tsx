'use client';

import { useTodoFilters } from '@/hooks/use-todo-filters';
import { useTodo } from '@/lib/store';
import type { FilterType, SortType, Todo } from '@/lib/types';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback } from 'react';
import { TodoFilters } from './todo-filters';
import { TodoItem } from './todo-item';
import { TodoSearch } from './todo-search';
import { TodoSort } from './todo-sort';


export function TodoList({ onEdit }: { onEdit: (todo: Todo) => void }) {
  const { todos, isFormVisible, setIsFormVisible, deleteTodo, toggleTodo } = useTodo();
  const { filteredTodos, filters, setFilters } = useTodoFilters(todos);

  const handleToggle = useCallback(
    (id: string) => {
      toggleTodo(id);
    },
    [toggleTodo],
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-center w-full"
      >
        <div className="w-full sm:w-[60%]">
          <TodoSearch
            value={filters.search}
            onChange={(value: string) => setFilters({ search: value })}
            className="w-full"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-[40%]">
          <TodoFilters
            value={filters.filter}
            onValueChange={(value: FilterType) => {
              if (isFormVisible) {
                setIsFormVisible(false);
              }
              setFilters({ filter: value });
            }}
            className="w-full"
          />
          <TodoSort
            value={filters.sort}
            onValueChange={(value: SortType) => {
              if (isFormVisible) {
                setIsFormVisible(false);
              }
              setFilters({ sort: value });
            }}
            className="w-full"
          />
        </div>
      </motion.div>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={deleteTodo}
              onEdit={onEdit}
            />
          ))}
        </AnimatePresence>
        {filteredTodos.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground"
          >
            No todos found
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
