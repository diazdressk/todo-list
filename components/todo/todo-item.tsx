"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { Todo } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Pencil, Trash2 } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

const priorityColors = {
  low: "bg-blue-500",
  medium: "bg-yellow-500",
  high: "bg-red-500",
} as const;

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const createdDate = new Date(todo.createdAt);
  const formattedDate = createdDate.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group flex items-center gap-4 rounded-lg border p-4 shadow-sm transition-all hover:shadow-md"
    >
      <div className="flex items-center gap-4 flex-1">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="h-5 w-5"
        />
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex items-center gap-2">
            <h3
              className={cn(
                "text-lg font-medium transition-all",
                todo.completed && "line-through text-gray-400"
              )}
            >
              {todo.title}
            </h3>
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                priorityColors[todo.priority]
              )}
            />
          </div>
          {todo.description && (
            <p
              className={cn(
                "text-sm text-gray-500",
                todo.completed && "line-through"
              )}
            >
              {todo.description}
            </p>
          )}
          <p className="text-xs text-gray-400">
            Created: {formattedDate}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onEdit(todo)}
          className="h-8 w-8"
        >
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Edit todo</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(todo.id)}
          className="h-8 w-8 text-red-500 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete todo</span>
        </Button>
      </div>
    </motion.div>
  );
} 