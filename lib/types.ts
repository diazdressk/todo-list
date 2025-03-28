import { z } from "zod";

export const TodoSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  description: z.string().max(500, "Description is too long").optional(),
  completed: z.boolean().default(false),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Todo = z.infer<typeof TodoSchema>;

export type TodoFormData = Omit<Todo, "id" | "createdAt" | "updatedAt">;

export type FilterType = "all" | "active" | "completed";
export type SortType = "createdAt" | "priority" | "title";
export type SortDirection = "asc" | "desc";

export interface TodoFilters {
  filter: FilterType;
  sort: SortType;
  direction: SortDirection;
  search: string;
} 