import { Todo } from "@/lib/types";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Clock, Pencil, Trash2 } from "lucide-react";
import { Label, Separator } from "../ui";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

const priorityColors = {
  low: 'bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border-blue-500/20 dark:border-blue-500/30',
  medium:
    'bg-yellow-500/10 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300 border-yellow-500/20 dark:border-yellow-500/30',
  high: 'bg-red-500/10 text-red-700 dark:bg-red-500/20 dark:text-red-300 border-red-500/20 dark:border-red-500/30',
} as const;

export function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{ duration: 0.2 }}
      layout
    >
      <Card className="group overflow-hidden border-muted/30 hover:border-muted/50 transition-all duration-200 p-0">
        <CardContent className="p-0">
          <div className="flex items-start gap-4 p-4">
            <motion.div whileTap={{ scale: 0.9 }} className="flex items-center justify-center mt-1">
              <Checkbox
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onCheckedChange={() => onToggle(todo.id)}
                className={cn(
                  'h-5 w-5 rounded-md border-2 transition-colors duration-200 cursor-pointer',
                  todo.completed ? 'border-primary' : 'border-muted-foreground/30',
                )}
              />
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <Label
                  htmlFor={`todo-${todo.id}`}
                  className={cn(
                    'text-lg font-medium select-none cursor-pointer transition-colors duration-200 line-clamp-2',
                    todo.completed && 'line-through text-muted-foreground',
                  )}
                >
                  {todo.title}
                </Label>
                <Badge
                  variant="outline"
                  className={cn(
                    'shrink-0 transition-all duration-200 border rounded-md px-2 py-0.5 text-xs font-medium',
                    priorityColors[todo.priority],
                    'hover:scale-105',
                  )}
                >
                  {todo.priority}
                </Badge>
              </div>
              {todo.description && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={cn(
                    'mt-1 text-sm text-muted-foreground/80 line-clamp-2 transition-colors duration-200',
                    todo.completed && 'text-muted-foreground/50',
                  )}
                >
                  {todo.description}
                </motion.p>
              )}
            </div>
          </div>
          <Separator className="my-0" />
          <div className="px-4 py-2 flex items-center justify-between bg-muted/5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
              <Clock className="h-3.5 w-3.5" />
              <span>{format(new Date(todo.createdAt), "MMM d, yyyy 'at' h:mm:ss a")}</span>
            </div>
            <div className="flex items-center gap-0.5">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(todo)}
                  aria-label={`Edit ${todo.title}`}
                  className="h-8 w-8 hover:bg-background"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(todo.id)}
                  aria-label={`Delete ${todo.title}`}
                  className="h-8 w-8 hover:bg-background hover:text-destructive"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}