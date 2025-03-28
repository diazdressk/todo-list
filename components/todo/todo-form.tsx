"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useTodo } from "@/lib/store";
import { TodoSchema, type Todo, type TodoFormData } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const priorities = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
] as const;

interface TodoFormProps {
  todoToEdit?: Todo;
  onCancel?: () => void;
}

export function TodoForm({ todoToEdit, onCancel }: TodoFormProps) {
  const { addTodo, updateTodo } = useTodo();
  const form = useForm<TodoFormData>({
    resolver: zodResolver(TodoSchema.omit({ id: true, createdAt: true, updatedAt: true })),
    defaultValues: {
      title: "",
      description: "",
      completed: false,
      priority: todoToEdit?.priority || "medium",
    },
  });

  useEffect(() => {
    if (todoToEdit) {
      form.reset({
        title: todoToEdit.title,
        description: todoToEdit.description || "",
        priority: todoToEdit.priority,
        completed: todoToEdit.completed,
      });
    } else {
      form.reset({
        title: "",
        description: "",
        completed: false,
        priority: "medium",
      });
    }
  }, [todoToEdit, form]);

  const onSubmit = (data: TodoFormData) => {
    if (todoToEdit) {
      updateTodo(todoToEdit.id, {
        ...data,
        priority: data.priority || todoToEdit.priority,
      });
      onCancel?.();
    } else {
      addTodo(data);
    }
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter todo title..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter todo description..." 
                    className="min-h-[100px] resize-y"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || todoToEdit?.priority}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose priority" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {priorities.map((priority) => (
                      <SelectItem key={priority.value} value={priority.value}>
                        {priority.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex justify-end gap-2"
        >
          {todoToEdit && (
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
            >
              Cancel
            </Button>
          )}
          <Button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
          >
            {todoToEdit ? "Update Todo" : "Add Todo"}
          </Button>
        </motion.div>
      </form>
    </Form>
  );
} 