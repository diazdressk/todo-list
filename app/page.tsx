'use client';

import { ThemeSwitcher } from '@/components/theme/theme-switcher';
import { TodoForm } from '@/components/todo/todo-form';
import { TodoList } from '@/components/todo/todo-list';
import { Button } from '@/components/ui/button';
import { useTodo } from '@/lib/store';
import type { Todo } from '@/lib/types';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const { isFormVisible, setIsFormVisible } = useTodo();
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleEdit = (todo: Todo) => {
    setSelectedTodo(todo);
    setIsFormVisible(true);
  };

  const handleCancel = () => {
    setSelectedTodo(null);
    setIsFormVisible(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main className="container py-6 md:py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Todo List</h1>
            <Button
              onClick={() => {
                setSelectedTodo(null);
                setIsFormVisible(!isFormVisible);
              }}
              size="sm"
            >
              {isFormVisible ? (
                <>
                  <X className="h-4 w-4" />
                  Cancel
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Add Todo
                </>
              )}
            </Button>
          </div>

          {isFormVisible && (
            <TodoForm todoToEdit={selectedTodo || undefined} onCancel={handleCancel} />
          )}

          <TodoList onEdit={handleEdit} />
        </div>
      </main>
    </div>
  );
}
